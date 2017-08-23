
import {EventEmitter} from "@angular/core";

export class StatusService {
  hasWonEvent: EventEmitter<Boolean> = new EventEmitter();

  gameLost() {
    console.log("game lost");
    this.hasWonEvent.emit(false);
  }

  gameWon() {
    console.log("game won");
    this.hasWonEvent.emit(true);
  }
}
