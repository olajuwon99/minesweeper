/**
 * Created by hopsh01 on 6/2/2017.
 */
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Cell} from "./cell";

@Component({
  selector: 'board',
  templateUrl: './board.html'
})
export class BoardComponent {
  board: Cell[][];

  private _boardSize: number;
  private uncoveredCells: number;
  private mineCount: number;
  ignoreClicks: boolean;

  @Output()
  hasWon: EventEmitter<boolean> = new EventEmitter();

  @Input('size')
  set boardSize(size: number) {
    this._boardSize = size;
    this.initBoard(size);
  }

  cellClicked(cell: Cell): void {
    cell.setUnCovered();
    if (cell.containsMine()) {
      this.lostGame(cell);
    } else {
      this.uncoveredCells++;
      this.exposeEmptyAdjacentCells(cell);
    }
  }

  isCovered(cell: Cell): boolean {
    return cell.isCovered();
  }

  initBoard(boardSize: number) {
    this.board = [];
    this.uncoveredCells = 0;
    this.mineCount = 0;
    this.ignoreClicks = false;
    this.createCells(boardSize);
    this.setCellsImage();
  }

  handleCoveredCell(cell: Cell): string {
    if (this.hasWonGame()) {
      return cell.getImage();
    } else if (cell.isFlagged) {
      return './../../assets/flag.png';
    } else {
      return './../../assets/covered.png';
    }
  }

  private createCells(boardSize: number) {
    for (let row = 0; row < boardSize; row++) {
      this.board[row] = [];
      for (let column = 0; column < boardSize; column++) {
        let cell = new Cell(row, column);
        if (cell.containsMine()) this.mineCount++;
        this.board[row][column] = cell;
      }
    }
  }

  private setCellsImage() {
    this.board.forEach((row: Array<Cell>) => {
      row.filter((cell: Cell) => !cell.containsMine())
         .map((cell: Cell) => {
           const adjacentMinesCount: number = this.countAdjacentMines(cell);
           cell.setEmpty(adjacentMinesCount === 0);
           cell.setImage(adjacentMinesCount)
         })
    });
  }

  private countAdjacentMines(cell: Cell): number {
    let count: number = 0;

    this.iterateOnAdjacentCells(cell.getRow(), cell.getColumn(), (cell: Cell) => {
      if (cell && cell.containsMine()) count++;
    });

    return count;
  }

  private getCell(row: number, column: number): Cell {
    return this.board[row] ? this.board[row][column] : null;
  }

  private lostGame(cell: Cell): void {
    cell.setRedMine();
    this.ignoreClicks = true;
    this.hasWon.emit(false);
  }

  private exposeEmptyAdjacentCells(cell: Cell): void {
    const row = cell.getRow();
    const column = cell.getColumn();

    this.iterateOnAdjacentCells(row, column, (adjacentCell: Cell) => {
      this.uncoverEmptyCell(adjacentCell);
    });
  }

  private iterateOnAdjacentCells(row: number, column: number, callBack: (cell: Cell) => void) {
    [-1, 0, 1].forEach((i) => {
      [-1, 0, 1].filter((j) => i !== 0 || j !== 0) // only neighbors allowed
                .forEach((j) => {
                  let adjacentCell: Cell = this.getCell(row + i, column + j);
                  callBack(adjacentCell);
                });
    });
  }

  private uncoverEmptyCell(cell: Cell) {
    if (cell && cell.isCovered()) {
      if (!cell.containsMine()) {
        cell.setUnCovered();
        this.uncoveredCells++;
      }
      if (cell.isEmpty()) {
        this.exposeEmptyAdjacentCells(cell);
      }
    }
  }

  private hasWonGame(): boolean {
    const hasWon = (this._boardSize * this._boardSize) - this.uncoveredCells === this.mineCount;

    if (hasWon) {
      this.hasWon.emit(true);
    }

    return hasWon;
  }
}
