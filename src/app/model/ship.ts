export class Ship {
  blocks: Array<any>;
  firedBlockCount: number;
  isVertical: boolean;
  isOnField: boolean;
  isInAir: boolean;
  isOnfire: boolean;
  isDrowned: boolean;
  constructor(blockNum: number) {
    this.blocks = Array(blockNum).fill([undefined, undefined]);
    this.firedBlockCount = 0;
    this.isVertical = false;
    this.isOnField = false;
    this.isInAir = false;
    this.isOnfire = false;
    this.isDrowned = false;
  }
  public rotate() {
    this.isVertical = !this.isVertical;
  }
  public areAllBlocksFired(): boolean {
    return this.blocks.length === this.firedBlockCount;
  }
}
