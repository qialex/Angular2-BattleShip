"use strict";
var Player = (function () {
    function Player() {
        var _this = this;
        this.shipsBySize = [];
        this.ships = [];
        this.field = [];
        for (var i = 1; i < 5; i++) {
            this.shipsBySize.push([]);
            for (var j = 0; j < i; j++) {
                this.ships.push({
                    blocks: Array(5 - i).fill([undefined, undefined]),
                    isVertical: true,
                    isOnField: false,
                    isInAir: false,
                    isOnfire: false,
                    isDrowned: false
                });
                this.shipsBySize[i - 1].push(this.ships[this.ships.length - 1]);
            }
        }
        for (var i = 0; i < 10; i++) {
            this.field.push([]);
            for (var j = 0; j < 10; j++) {
                this.field[i].push({
                    x: i,
                    y: j,
                    isShip: false,
                    isUnderShip: false,
                    isNeighborOfShip: false,
                    isFired: false,
                    allNeighbors: [],
                    diagonalNeighbors: [],
                    verticalNeighbors: [],
                    horizontalNeighbors: [],
                    linearNeighbors: [],
                    ship: undefined,
                    blockNum: undefined,
                });
            }
        }
        this.field.map(function (row, i) { return row.map(function (square, j) { return _this.calculateNeighbors(square, i, j); }); });
    }
    Player.prototype.calculateNeighbors = function (square, i, j) {
        var _this = this;
        var neighbors = [
            [i - 1, j - 1], [i - 1, j], [i - 1, j + 1],
            [i, j - 1], [i, j + 1],
            [i + 1, j - 1], [i + 1, j], [i + 1, j + 1],
        ];
        neighbors.map(function (coords, k) {
            if (_this.field[coords[0]] && _this.field[coords[0]][coords[1]]) {
                square.allNeighbors.push(_this.field[coords[0]][coords[1]]);
                if ([0, 2, 5, 7].indexOf(k) > -1) {
                    square.diagonalNeighbors.push(_this.field[coords[0]][coords[1]]);
                }
                if ([1, 3, 4, 6].indexOf(k) > -1) {
                    square.linearNeighbors.push(_this.field[coords[0]][coords[1]]);
                }
                if ([1, 6].indexOf(k) > -1) {
                    square.verticalNeighbors.push(_this.field[coords[0]][coords[1]]);
                }
                if ([3, 4].indexOf(k) > -1) {
                    square.horizontalNeighbors.push(_this.field[coords[0]][coords[1]]);
                }
            }
        });
    };
    Player.prototype.getPlacesForDraggedShip = function (square, ship) {
        if (!ship || !square) {
            return [];
        }
        var x = square.x;
        var y = square.y;
        var places = [];
        if (ship.isVertical) {
            for (var i = x + (ship.blocks.length - 1); i >= x - (ship.blocks.length - 1); i--) {
                if (!this.field[i]) {
                    continue;
                }
                if (!this.field[i][y].isShip && !this.field[i][y].isNeighborOfShip) {
                    places.push(this.field[i][y]);
                }
                else {
                    places = [];
                }
                if (places.length === ship.blocks.length) {
                    return places.reverse();
                }
            }
        }
        else {
            for (var i = y + (ship.blocks.length - 1); i >= y - (ship.blocks.length - 1); i--) {
                if (!this.field[x][i]) {
                    continue;
                }
                if (!this.field[x][i].isShip && !this.field[x][i].isNeighborOfShip) {
                    places.push(this.field[x][i]);
                }
                else {
                    places = [];
                }
                if (places.length === ship.blocks.length) {
                    return places.reverse();
                }
            }
        }
        return [];
    };
    Player.prototype.tryToPlaceShip = function (square, ship) {
        var places = this.getPlacesForDraggedShip(square, ship);
        if (!places.length) {
            return;
        }
        this.placeShip(places, ship);
    };
    Player.prototype.placeShip = function (places, ship) {
        for (var i = 0; i < places.length; i++) {
            places[i].isShip = true;
            places[i].isUnderShip = false;
            places[i].ship = ship;
            places[i].blockNum = i;
            ship.blocks[i] = [places[i].x, places[i].y];
            for (var j = 0; j < places[i].allNeighbors.length; j++) {
                if (!places[i].allNeighbors[j].isShip) {
                    places[i].allNeighbors[j].isNeighborOfShip = true;
                }
            }
        }
        ship.isOnField = true;
    };
    Player.prototype.removeShipFromField = function (ship) {
        ship.isOnField = false;
        for (var i = 0; i < ship.blocks.length; i++) {
            var coords = ship.blocks[i];
            var square = this.field[coords[0]][coords[1]];
            square.isShip = false;
            square.ship = undefined;
            square.blockNum = undefined;
            for (var j = 0; j < square.allNeighbors.length; j++) {
                var numberOfneighboringShips = 0;
                for (var k = 0; k < square.allNeighbors[j].allNeighbors.length; k++) {
                    if (square.allNeighbors[j].allNeighbors[k].isShip) {
                        numberOfneighboringShips++;
                    }
                }
                if (!numberOfneighboringShips) {
                    square.allNeighbors[j].isNeighborOfShip = false;
                }
            }
        }
    };
    Player.prototype.markFieldUnderShip = function (square, ship, doMark) {
        var _this = this;
        var places = this.getPlacesForDraggedShip(square, ship);
        places.map(function (place) { return _this.field[place.x][place.y].isUnderShip = doMark; });
    };
    Player.prototype.markShipInAir = function (ship, value) {
        ship.isInAir = value;
    };
    Player.prototype.rotateShip = function (ship) {
        ship.isVertical = !ship.isVertical;
    };
    Player.prototype.rotateShipOnField = function (square, otherBlocks) {
        if (!square.ship || square.ship.blocks.length === 1) {
            return;
        }
        var ship = square.ship;
        var block;
        var blockNum;
        square.ship.blocks.map(function (coords, i) {
            if (coords[0] === square.x && coords[1] === square.y) {
                block = coords;
                blockNum = i;
            }
        });
        var newCoords = ship.isVertical ? [block[0], block[1] - blockNum] : [block[0] - blockNum, block[1]];
        newCoords = [Math.min(Math.max(newCoords[0], 0), 10), Math.min(Math.max(newCoords[1], 0), 10)];
        this.removeShipFromField(ship);
        this.rotateShip(ship);
        var places = this.getPlacesForDraggedShip(this.field[newCoords[0]][newCoords[1]], ship);
        if (places.length) {
            this.placeShip(places, ship);
        }
        else {
            this.rotateShip(ship);
            var oldSquare = this.field[ship.blocks[0][0]][ship.blocks[0][1]];
            var oldPlaces = this.getPlacesForDraggedShip(oldSquare, ship);
            this.placeShip(oldPlaces, ship);
            if (otherBlocks) {
                otherBlocks.splice(0, 1);
            }
            else {
                otherBlocks = [];
                for (var i = 1; i <= 2; i++) {
                    if (ship.blocks[blockNum - i]) {
                        otherBlocks.push(ship.blocks[blockNum - i]);
                    }
                    if (ship.blocks[blockNum + i]) {
                        otherBlocks.push(ship.blocks[blockNum + i]);
                    }
                }
            }
            if (otherBlocks.length) {
                this.rotateShipOnField(this.field[otherBlocks[0][0]][otherBlocks[0][1]], otherBlocks);
            }
            else {
            }
        }
    };
    Player.prototype.randomSet = function () {
        var _this = this;
        if (this.allShipsArePlaced()) {
            this.clearField();
        }
        this.ships.map(function (ship, k) {
            if (ship.isOnField) {
                return;
            }
            _this.ships[k].isVertical = Math.random() > 0.5;
            _this.ships[k].isOnField = true;
            var opportunities = [];
            _this.field.map(function (row) { return row.map(function (square) {
                var places = _this.getPlacesForDraggedShip(square, ship);
                if (places.length) {
                    opportunities.push({ places: places });
                }
            }); });
            var randomOpportunitie = opportunities[Math.floor(Math.random() * opportunities.length)];
            _this.placeShip(randomOpportunitie.places, ship);
        });
    };
    Player.prototype.clearField = function () {
        this.constructor();
    };
    Player.prototype.clearBatte = function () {
        var _this = this;
        this.field.map(function (row, i) { return row.map(function (square, j) {
            _this.field[i][j].isFired = false;
        }); });
    };
    Player.prototype.allShipsArePlaced = function () {
        var result = true;
        this.ships.map(function (ship) {
            result = result && ship.isOnField;
        });
        return result;
    };
    Player.prototype.allShipsAreOnFire = function () {
        var count = 0;
        this.field.map(function (row) { return row.map(function (square) {
            if (square.isFired && square.isShip) {
                count++;
            }
        }); });
        return count === 20;
    };
    Player.prototype.getFired = function (square) {
        if (square.isFired) {
            return;
        }
        square.isFired = true;
        if (square.isShip) {
            for (var i = 0; i < square.diagonalNeighbors.length; i++) {
                square.diagonalNeighbors[i].isFired = true;
            }
            var ship = square.ship;
            var firedSquareCount = 0;
            for (var i = 0; i < ship.blocks.length; i++) {
                var coords = ship.blocks[i];
                if (this.field[coords[0]][coords[1]].isFired) {
                    firedSquareCount++;
                }
            }
            for (var i = 0; i < ship.blocks.length; i++) {
                var coords = ship.blocks[i];
                var sq = this.field[coords[0]][coords[1]];
                if (firedSquareCount === ship.blocks.length) {
                    for (var j = 0; j < sq.allNeighbors.length; j++) {
                        sq.allNeighbors[j].isFired = true;
                    }
                }
            }
        }
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=player.js.map