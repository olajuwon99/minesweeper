/**
 * Created by hopsh01 on 6/2/2017.
 */
import {Component} from "@angular/core";
import {Cell} from "./cell";
import {StatusService} from "./status.service";

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

  constructor(private statusService: StatusService){}

  cellClicked(cell: Cell): void {
    this.uncoverCell(cell);
    if (cell.containsMine()) {
      this.lostGame(cell);
    } else {
      this.exposeEmptyAdjacentCells(cell);
      if (this.hasWonGame()) {
        this.gameWon();
      }
    }
  }

  isCovered(cell: Cell): boolean {
    return cell.isCovered();
  }

  initBoard(boardSize: number): void {
    this.board = [];
    this._boardSize = boardSize;
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

  private createCells(boardSize: number): void {
    for (let row = 0; row < boardSize; row++) {
      this.board[row] = [];
      for (let column = 0; column < boardSize; column++) {
        let cell = new Cell(row, column);
        if (cell.containsMine()) this.mineCount++;
        this.board[row][column] = cell;
      }
    }
  }

  private setCellsImage(): void {
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

    const incrementMineCount: (cell: Cell) => void = (cell?: Cell): void => {
      if (cell && cell.containsMine()) count++;
    };

    this.iterateOnAdjacentCells(cell.getRow(), cell.getColumn(), incrementMineCount);

    return count;
  }

  private getCell(row: number, column: number): Cell {
    return this.board[row] ? this.board[row][column] : null;
  }

  private lostGame(cell: Cell): void {
    cell.setRedMine();
    this.ignoreClicks = true;
    this.statusService.gameLost();
  }

  private gameWon(): void {
    this.ignoreClicks = true;
    this.statusService.gameWon();
  }

  private exposeEmptyAdjacentCells(cell: Cell): void {
    const row = cell.getRow();
    const column = cell.getColumn();

    this.iterateOnAdjacentCells(row, column, this.uncoverEmptyCell.bind(this));
  }

  private iterateOnAdjacentCells(row: number, column: number, callBack: (cell: Cell) => void): void {
    [-1, 0, 1].forEach((i) => {
      [-1, 0, 1].filter((j) => i !== 0 || j !== 0) // only neighbors allowed
                .map((j) => {
                  return this.getCell(row + i, column + j);
                })
                .forEach(callBack);
    });
  }

  private uncoverCell(cell: Cell): void {
    cell.setUnCovered();
    this.uncoveredCells++;
  }

  private uncoverEmptyCell(cell: Cell): void {
    if (cell && cell.isCovered()) {
      if (!cell.containsMine()) {
        this.uncoverCell(cell);
      }
      if (cell.isEmpty()) {
        this.exposeEmptyAdjacentCells(cell);
      }
    }
  }

  private hasWonGame(): boolean {
    return (this._boardSize * this._boardSize) - this.uncoveredCells === this.mineCount;
  }

}
