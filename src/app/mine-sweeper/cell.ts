/**
 * Created by hopsh01 on 6/2/2017.
 */
export class Cell {
  private hasMine: boolean;
  private covered: boolean;
  private img: string;
  private empty: boolean;
  isFlagged: boolean;

  constructor(private row: number, private column: number) {
    this.covered = true;
    this.isFlagged = false;
    if (this.hasMine = Math.random() * 100 < 30) {
      this.initMineCell();
    }
  }

  private initMineCell() {
    this.img = './../../assets/mine.png';
    this.empty = false;
  }

  public containsMine(): boolean {
    return this.hasMine;
  }

  isCovered(): boolean {
    return this.covered;
  }

  setUnCovered(): void {
    this.covered = false;
  }

  setRedMine(): void {
    this.img = './../../assets/red-mine.png';
  }

  setImage(adjacentMinesCount: number): void {
    if (adjacentMinesCount === 0) {
      this.img = './../../assets/empty.png';
    } else {
      this.img = `./../../assets/number-${adjacentMinesCount}.png`;
    }
  }

  getImage(): string {
    return this.img;
  }

  getRow(): number {
    return this.row;
  }

  getColumn(): number {
    return this.column;
  }

  setEmpty(empty: boolean) {
    this.empty = empty;
  }

  isEmpty(): boolean {
    return this.empty;
  }

}
