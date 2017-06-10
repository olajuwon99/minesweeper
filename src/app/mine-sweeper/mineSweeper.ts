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

  private initGame(): void {
    this.buttonLabel = 'New Game';
    this.stopWatch = 0;
    this.isGameStatusSet = false;
  }

  initBoard(boardSize: number): void {
    this.initGame();
    this.initTimer();
    this.boardComponent.initBoard(boardSize);
  }

  private initTimer() {
    if (this.subscription)
      this.subscription.unsubscribe();
    this.subscription = this.timer$.subscribe((i) => this.stopWatch = i);
  }

  setButtonText(hasWon) {
    if (!this.isGameStatusSet) {
      this.isGameStatusSet = true; // this is a hack!
      setTimeout(() => { // timeout because of 'digest' issues of angular
          this.buttonLabel = hasWon ? 'Woo hoo You Won!' : 'oops! Try Again!';
          this.subscription.unsubscribe();
        }, 1
      );
    }
  }
}
