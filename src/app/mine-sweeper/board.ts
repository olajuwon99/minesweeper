/**
 * Created by hopsh01 on 6/2/2017.
 */
import {Component, Input} from "@angular/core";
import {Cell} from "./cell";

@Component({
  selector: 'board',
  templateUrl: './board.html'
})

export class BoardComponent {
  board: Cell[][];

  private _boardSize: number;

  @Input('size')
  set boardSize(size: number) {
    this._boardSize = size;
    this.initBoard(size);
  }

  handleCellClicked(cell: Cell): void {
    cell.setUnCovered();
    if (cell.containsMine()) {
      this.lostGame(cell);
    } else if (this.checkWinStatus()) {
      this.wonGame();
    } else {
      this.exposeEmptyAdjacentCells(cell);
    }
  }

  isCovered(cell: Cell): boolean {
    return cell.isCovered();
  }

  initBoard(boardSize: number) {
    this.board = [];
    this.createCells(boardSize);
    this.setCellsImage();
  }

  private createCells(boardSize: number) {
    for (let row = 0; row < boardSize; row++) {
      this.board[row] = [];
      for (let column = 0; column < boardSize; column++) {
        this.board[row][column] = new Cell(row, column);
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
    alert('you have lost!');
    setTimeout(() => this.initBoard(this._boardSize), 1000);
  }

  private wonGame(): void {
    alert('you have won!');
    this.uncoverMines();
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
      }
      if (cell.isEmpty()) {
        this.exposeEmptyAdjacentCells(cell);
      }
    }
  }

  private checkWinStatus(): boolean {
    for (let row = 0; row < this._boardSize; row++) {
      for (let column = 0; column < this._boardSize; column++) {
        const cell: Cell = this.board[row][column];
        if (cell.isCovered() && (cell.isEmpty() || !cell.containsMine())) {
          return false;
        }
      }
    }

    return true;
  }

  private uncoverMines(): void {
    this.board.forEach((row: Array<Cell>) => {
      row.filter((cell: Cell) => cell.isCovered() && cell.containsMine())
         .map((cell: Cell) => cell.setUnCovered())
    });
  }
}
