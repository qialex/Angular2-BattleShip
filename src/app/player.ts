export class Player {
    ships: any;
    shipsBySize: any = [];
    field: any;

    constructor() {

        this.ships = [];
        this.field = [];

        for (let i = 1; i < 5; i++) {
            this.shipsBySize.push([]);
            for (let j = 0; j < i; j++) {
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

        for (let i = 0; i < 10; i++) {
            this.field.push([]);
            for (let j = 0; j < 10; j++) {
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

        this.field.map((row: any, i: number) => row.map((square: any, j: number) => this.calculateNeighbors(square, i, j)));
    }
    private calculateNeighbors(square: any, i: number, j: number) {

        let neighbors = [
            [i - 1, j - 1], [i - 1, j], [i - 1, j + 1],
            [i, j - 1],                 [i, j + 1],
            [i + 1, j - 1], [i + 1, j], [i + 1, j + 1],
        ];

        neighbors.map((coords, k) => {
            if (this.field[coords[0]] && this.field[coords[0]][coords[1]]) {
                square.allNeighbors.push(this.field[coords[0]][coords[1]]);
                if ([0, 2, 5, 7].indexOf(k) > -1) {
                    square.diagonalNeighbors.push(this.field[coords[0]][coords[1]]);
                }
                if ([1, 3, 4, 6].indexOf(k) > -1) {
                    square.linearNeighbors.push(this.field[coords[0]][coords[1]]);
                }
                if ([1, 6].indexOf(k) > -1) {
                    square.verticalNeighbors.push(this.field[coords[0]][coords[1]]);
                }
                if ([3, 4].indexOf(k) > -1) {
                    square.horizontalNeighbors.push(this.field[coords[0]][coords[1]]);
                }
            }
        });
    }
    public getPlacesForDraggedShip(square: any, ship: any) {
        if (!ship || !square) {
            return [];
        }

        let x = square.x;
        let y = square.y;

        let places: any = [];

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
    public tryToPlaceShip(square: any, ship: any) {
        let places = this.getPlacesForDraggedShip(square, ship);

        if (!places.length) {
            return;
        }

        this.placeShip(places, ship);
    }
    public placeShip(places: any, ship: any) {
        for (let i = 0; i < places.length; i++) {
            places[i].isShip = true;
            places[i].isUnderShip = false;
            places[i].ship = ship;
            places[i].blockNum = i;
            ship.blocks[i] = [places[i].x, places[i].y];

            for (let j = 0; j < places[i].allNeighbors.length; j++) {
                if (!places[i].allNeighbors[j].isShip) {
                    places[i].allNeighbors[j].isNeighborOfShip = true;
                }
            }
        }
        ship.isOnField = true;
    }
    public removeShipFromField(ship: any) {
        ship.isOnField = false;
        for (let i = 0; i < ship.blocks.length; i++) {
            let coords = ship.blocks[i];
            let square = this.field[coords[0]][coords[1]];
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
    public markFieldUnderShip (square: any, ship: any, doMark: boolean) {
        let places: any = this.getPlacesForDraggedShip(square, ship);
        places.map((place: any) => this.field[place.x][place.y].isUnderShip = doMark);
    }
    public markShipInAir (ship: any, value: boolean) {
        ship.isInAir = value;
    }
    public rotateShip(ship: any){
        ship.isVertical = !ship.isVertical;
    }
    public rotateShipOnField(square: any, otherBlocks: any) {
        if (!square.ship || square.ship.blocks.length === 1) {
            return;
        }

        let ship: any = square.ship;
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
        this.rotateShip(ship);
        let places = this.getPlacesForDraggedShip(this.field[newCoords[0]][newCoords[1]], ship);

        if (places.length) {
            this.placeShip(places, ship);
        } else {
            this.rotateShip(ship);
            let oldSquare = this.field[ship.blocks[0][0]][ship.blocks[0][1]];
            let oldPlaces = this.getPlacesForDraggedShip(oldSquare, ship);
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

        this.ships.map((ship: any, k: number) => {
            if (ship.isOnField) {
                return;
            }

            this.ships[k].isVertical = Math.random() > 0.5;
            this.ships[k].isOnField = true;


            let opportunities: any = [];
            this.field.map((row: any) => row.map((square: any) => {
                let places = this.getPlacesForDraggedShip(square, ship);
                if (places.length) {
                    opportunities.push({places: places});
                }
            }));

            let randomOpportunitie = opportunities[Math.floor(Math.random() * opportunities.length)];

            this.placeShip(randomOpportunitie.places, ship);
        });
    }
    public clearField() {
        this.constructor();
    }
    public clearBatte() {
        this.field.map((row: any, i: number) => row.map((square: any, j: number) => {
            this.field[i][j].isFired = false;
        }));
    }
    public allShipsArePlaced(): boolean {
        let result = true;
        this.ships.map((ship: any) => {
            result = result && ship.isOnField;
        });
        return result;
    }
    public allShipsAreOnFire(): boolean {
        let count = 0;
        this.field.map((row: any) => row.map((square: any) => {
            if (square.isFired && square.isShip) {
                count++;
            }
        }));
        return count === 20;
    }
    public getFired(square: any) {
        if (square.isFired) {
            return;
        }

        square.isFired = true;

        if (square.isShip) {

            for (let i = 0; i < square.diagonalNeighbors.length; i++) {
                square.diagonalNeighbors[i].isFired = true;
            }

            let ship: any = square.ship;
            let firedSquareCount = 0;

            for (let i = 0; i < ship.blocks.length; i++) {
                let coords: any = ship.blocks[i];
                if (this.field[coords[0]][coords[1]].isFired) {
                    firedSquareCount++;
                }
            }

            for (let i = 0; i < ship.blocks.length; i++) {
                let coords: any = ship.blocks[i];
                let sq: any = this.field[coords[0]][coords[1]];

                if (firedSquareCount === ship.blocks.length) {
                    for (let j = 0; j < sq.allNeighbors.length; j++) {
                        sq.allNeighbors[j].isFired = true;
                    }
                }
            }
        }
    }
}
