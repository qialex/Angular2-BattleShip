export class Game {
    turnNumber: number;
    isHumanTurn: boolean;
    constructor() {
        this.isHumanTurn = true;
        this.turnNumber = 0;
    }
}
