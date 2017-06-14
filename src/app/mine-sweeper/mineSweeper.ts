/**
 * Created by hopsh01 on 6/2/2017.
 */
import {Component, OnInit, ViewChild} from "@angular/core";
import {BoardComponent} from "./board";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'mine-sweeper',
  templateUrl: './mine-sweeper.html'
})
export class MineSweeperComponent implements OnInit {
  static readonly NEW_GAME = 'New Game';
  static readonly WON_GAME = 'Woo hoo You Won!';
  static readonly LOST_GAME = 'oops! Try Again!';

  levels: Array<Object>;
  boardSize: number;
  buttonLabel: string;
  stopWatch: number;
  private timer$: Observable<number>;
  private subscription: Subscription;
  private isGameStatusSet: boolean;

  @ViewChild(BoardComponent)
  private boardComponent: BoardComponent;

  ngOnInit(): void {
    this.initGame();
    this.levels = [{name: 'Beginner', value: 6}, {name: 'Intermediate', value: 10}, {name: 'Expert', value: 14}];
    this.timer$ = TimerObservable.create(0, 1000);
  }

  initBoard(boardSize: number): void {
    if (!boardSize) return;

    this.initGame();
    this.initTimer();
    this.boardComponent.initBoard(boardSize);
  }

  setButtonText(hasWon): void {
    if (!this.isGameStatusSet) {
      this.isGameStatusSet = true; // this is a hack!
      setTimeout(() => { // timeout because of 'digest' issues of angular
          this.buttonLabel = hasWon ? MineSweeperComponent.WON_GAME : MineSweeperComponent.LOST_GAME;
          this.subscription.unsubscribe();
        }, 1
      );
    }
  }

  decideColor(): string {
    switch (this.buttonLabel) {
      case MineSweeperComponent.WON_GAME:
        return 'mdl-button--primary';
      case MineSweeperComponent.LOST_GAME:
        return 'mdl-button--accent';
      case MineSweeperComponent.NEW_GAME:
        return '';
    }
  }

  private initGame(): void {
    this.buttonLabel = MineSweeperComponent.NEW_GAME;
    this.stopWatch = 0;
    this.isGameStatusSet = false;
  }

  private initTimer(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
    this.subscription = this.timer$.subscribe((i) => this.stopWatch = i);
  }
}
