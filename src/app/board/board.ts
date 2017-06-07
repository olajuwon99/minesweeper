/**
 * Created by hopsh01 on 6/2/2017.
 */
import {Component, Input} from "@angular/core";
import {Cell} from "../Cell/cell";

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
      BoardComponent.lostGame(cell);
    } else if (this.checkWinStatus()) {
      BoardComponent.wonGame();
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
    this.setCellsImage(boardSize);
  }

  private createCells(boardSize: number) {
    for (let row = 0; row < boardSize; row++) {
      this.board[row] = [];
      for (let column = 0; column < boardSize; column++) {
        this.board[row][column] = new Cell(row, column);
      }
    }
  }

  private setCellsImage(boardSize: number) {
    for (let row = 0; row < boardSize; row++) {
      for (let column = 0; column < boardSize; column++) {
        const cell: Cell = this.board[row][column];
        if (!cell.containsMine()) {
          const adjacentMinesCount: number = this.countAdjacentMines(row, column);
          cell.setEmpty(adjacentMinesCount === 0);
          cell.setImage(adjacentMinesCount)
        }
      }
    }
  }

  private countAdjacentMines(row: number, column: number): number {
    let count: number = 0;

    this.iterateOnAdjacentCells(row, column, (cell: Cell) => {
      if (cell && cell.containsMine()) count++;
    });

    return count;
  }

  private getCell(row: number, column: number): Cell {
    return this.board[row] ? this.board[row][column] : null;
  }

  private static lostGame(cell: Cell): void {
    cell.setRedMine();
    alert('you have lost!');
  }

  private static wonGame() {
    alert('you have won!');
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
      [-1, 0, 1].forEach((j) => {
        if (i !== 0 || j !== 0) { // only neighbors allowed
          let adjacentCell: Cell = this.getCell(row + i, column + j);
          callBack(adjacentCell);
        }
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
}
