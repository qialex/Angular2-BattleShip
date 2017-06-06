import { Ship } from './ship';

export class Square {
  x: number;
  y: number;
  isShip: boolean;
  isDisabledForShip: boolean;
  isUnderShip: boolean;
  isNeighborOfShip: boolean;
  isFired: boolean;
  allNeighbors: Array<Square>;
  diagonalNeighbors: Array<Square>;
  linearNeighbors: Array<Square>;
  verticalNeighbors: Array<Square>;
  horizontalNeighbors: Array<Square>;
  ship: Ship;
  blockNum: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.isShip = false;
    this.isDisabledForShip = false;
    this.isUnderShip = false;
    this.isNeighborOfShip = false;
    this.isFired = false;
    this.allNeighbors = [];
    this.diagonalNeighbors = [];
    this.linearNeighbors = [];
    this.verticalNeighbors = [];
    this.horizontalNeighbors = [];
    this.ship = undefined;
    this.blockNum = undefined;
  }
  fireDiagonalNeighbors() {
    this.diagonalNeighbors.map((square: Square) => square.isFired = true);
  }
  fireAllNeighbors() {
    this.allNeighbors.map((square: Square) => square.isFired = true);
  }
  markNeighborsOfShip() {
    this.allNeighbors.map((square: Square) => {
      if (!square.isShip) {
        square.isNeighborOfShip = true;
      }
    });
  }
}
