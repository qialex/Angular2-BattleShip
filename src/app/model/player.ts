import { Ship } from './ship';
import { Square } from './square';

export class Player {
    ships: Array<Ship>;
    shipsBySize: Array<Array<Ship>>;
    field: Array<Array<Square>>;
    shipsOnField: number;
    firedBlockCountTotal: number;

    constructor() {

        this.ships = [];
        this.field = [];
        this.shipsBySize = [];
        this.shipsOnField = 0;
        this.firedBlockCountTotal = 0;

        for (let i = 1; i < 5; i++) {
            this.shipsBySize.push([]);
            for (let j = 0; j < i; j++) {
                this.ships.push(new Ship(5 - i));
                this.shipsBySize[i - 1].push(this.ships[this.ships.length - 1]);
            }
        }
        this.shipsBySize.reverse();

        for (let i = 0; i < 10; i++) {
            this.field.push([]);
            for (let j = 0; j < 10; j++) {
                this.field[i].push(new Square(i, j));
            }
        }

        this.field.map((row: Array<Square>, i: number) => row.map((square: Square, j: number) => this.calculateNeighbors(square, i, j)));
    }
    private calculateNeighbors(square: Square, x: number, y: number) {

        const neighbors: Array<Array<number>> = [
            [x - 1, y - 1], [x - 1, y], [x - 1, y + 1],
            [x, y - 1],                 [x, y + 1],
            [x + 1, y - 1], [x + 1, y], [x + 1, y + 1],
        ];

        neighbors.map((coords: Array<number>, i: number) => {
            if (this.field[coords[0]] && this.field[coords[0]][coords[1]]) {
                square.allNeighbors.push(this.field[coords[0]][coords[1]]);
                if ([0, 2, 5, 7].indexOf(i) > -1) {
                    square.diagonalNeighbors.push(this.field[coords[0]][coords[1]]);
                }
                if ([1, 3, 4, 6].indexOf(i) > -1) {
                    square.linearNeighbors.push(this.field[coords[0]][coords[1]]);
                }
                if ([1, 6].indexOf(i) > -1) {
                    square.verticalNeighbors.push(this.field[coords[0]][coords[1]]);
                }
                if ([3, 4].indexOf(i) > -1) {
                    square.horizontalNeighbors.push(this.field[coords[0]][coords[1]]);
                }
            }
        });
    }
    public getPlacesForDraggedShip(square: Square, ship: Ship) {
        if (!ship || !square) {
            return [];
        }

        const x: number = square.x;
        const y: number = square.y;

        let places: Array<Square> = [];

        if (ship.isVertical) {
            for (let i = x + (ship.blocks.length - 1) ; i >= x - (ship.blocks.length - 1); i--) {

                if (!this.field[i]) {
                    continue;
                }

                if (!this.field[i][y].isShip && !this.field[i][y].isNeighborOfShip) {
                    places.push(this.field[i][y]);
                } else {
                    places = [];
                }

                if (places.length === ship.blocks.length) {
                    return places.reverse();
                }
            }
        } else {
            for (let i = y + (ship.blocks.length - 1) ; i >= y - (ship.blocks.length - 1); i--) {

                if (!this.field[x][i]) {
                    continue;
                }

                if (!this.field[x][i].isShip && !this.field[x][i].isNeighborOfShip) {
                    places.push(this.field[x][i]);
                } else {
                    places = [];
                }

                if (places.length === ship.blocks.length) {
                    return places.reverse();
                }
            }
        }

        return [];
    }
    public tryToPlaceShip(square: Square, ship: Ship) {
        const places = this.getPlacesForDraggedShip(square, ship);

        if (!places.length) {
            return;
        }

        this.placeShip(places, ship);
    }
    public placeShip(places: Array<Square>, ship: Ship) {
        places.map((place: Square, i: number) => {
            place.isShip = true;
            place.isUnderShip = false;
            place.ship = ship;
            place.blockNum = i;
            place.markNeighborsOfShip();

            ship.blocks[i] = [place.x, place.y];
        });
        this.shipsOnField++;
        ship.isOnField = true;
    }
    public removeShipFromField(ship: Ship) {
        ship.isOnField = false;
        this.shipsOnField--;
        for (let i = 0; i < ship.blocks.length; i++) {
            const coords = ship.blocks[i];
            const square: Square = this.field[coords[0]][coords[1]];
            square.isShip = false;
            square.ship = undefined;
            square.blockNum = undefined;
            for (let j = 0; j < square.allNeighbors.length; j++ ) {
                let numberOfneighboringShips = 0;
                for (let k = 0; k < square.allNeighbors[j].allNeighbors.length; k++) {
                    if (square.allNeighbors[j].allNeighbors[k].isShip) {
                        numberOfneighboringShips++;
                    }
                }

                if (!numberOfneighboringShips) {
                    square.allNeighbors[j].isNeighborOfShip = false;
                }
            }
        }
    }
    public markFieldUnderShip (square: Square, ship: Ship, doMark: boolean) {
        const places: Array<Square> = this.getPlacesForDraggedShip(square, ship);
        places.map((place: Square) => place.isUnderShip = doMark);
    }
    public markFieldDisabledForShip (ship: Ship) {
        this.field.map((row: Array<Square>) => row.map((square: Square) => {
            if (!this.getPlacesForDraggedShip(square, ship).length) {
                square.isDisabledForShip = true;
            }
        }));
    }
    public unmarkFieldDisabledForShip () {
        this.field.map((row: Array<Square>) => row.map((square: Square) => {
            square.isDisabledForShip = false;
        }));
    }
    public rotateShipOnField(square: Square, otherBlocks: Array<Square>) {
        if (!square.ship || square.ship.blocks.length === 1) {
            return;
        }

        const ship: Ship = square.ship;
        let block: any;
        let blockNum: number;
        square.ship.blocks.map((coords: any, i: number) => {
            if (coords[0] === square.x && coords[1] === square.y) {
                block = coords;
                blockNum = i;
            }
        });

        let newCoords = ship.isVertical ? [block[0], block[1] - blockNum] : [block[0] - blockNum, block[1]];
        newCoords = [Math.min(Math.max(newCoords[0], 0), 10), Math.min(Math.max(newCoords[1], 0), 10)];

        this.removeShipFromField(ship);
        ship.rotate();
        const places: Array<Square> = this.getPlacesForDraggedShip(this.field[newCoords[0]][newCoords[1]], ship);

        if (places.length) {
            this.placeShip(places, ship);
        } else {
            ship.rotate();
            const oldSquare: Square = this.field[ship.blocks[0][0]][ship.blocks[0][1]];
            const oldPlaces: Array<Square> = this.getPlacesForDraggedShip(oldSquare, ship);
            this.placeShip(oldPlaces, ship);

            if (otherBlocks) {
                otherBlocks.splice(0, 1);
            } else {
                otherBlocks = [];
                for (let i = 1; i <= 2; i++) {
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
            } else {
                // this.removeShipFromField(ship);
                // ship.isVertical = !ship.isVertical;
            }
        }
    }
    public randomSet() {
        if (this.allShipsArePlaced()) {
            this.clearField();
        }

        this.ships.map((ship: Ship) => {
            if (ship.isOnField) {
                return;
            }

            ship.isVertical = Math.random() > 0.5;
            ship.isOnField = true;

            const opportunities: Array<Array<Square>> = [];
            this.field.map((row: Array<Square>) => row.map((square: Square) => {
                const places: Array<Square> = this.getPlacesForDraggedShip(square, ship);
                if (places.length) {
                    opportunities.push(places);
                }
            }));

            const randomPlaces: Array<Square> = opportunities[Math.floor(Math.random() * opportunities.length)];

            this.placeShip(randomPlaces, ship);
        });
    }
    public clearField() {
        this.constructor();
    }
    public clearBatte() {
        this.firedBlockCountTotal = 0;
        this.field.map((row: Array<Square>) => row.map((square: Square) => {
            square.isFired = false;
        }));
        this.ships.map((ship: Ship) => {
            ship.firedBlockCount = 0;
        });
    }
    public allShipsArePlaced(): boolean {
        return this.shipsOnField === 10;
    }
    public allShipsAreOnFire(): boolean {
        return this.firedBlockCountTotal === 20;
    }
    public getFired(square: Square) {
        if (square.isFired) {
            return;
        }

        square.isFired = true;

        if (square.isShip) {
            this.firedBlockCountTotal++;

            square.fireDiagonalNeighbors();

            const ship: Ship = square.ship;
            ship.firedBlockCount++;

            if (ship.areAllBlocksFired()) {
                for (let i = 0; i < ship.blocks.length; i++) {
                    const coords: Array<number> = ship.blocks[i];
                    this.field[coords[0]][coords[1]].fireAllNeighbors();
                }
            }
        }
    }
}
