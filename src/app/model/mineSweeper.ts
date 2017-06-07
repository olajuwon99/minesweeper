/**
 * Created by hopsh01 on 6/2/2017.
 */
import {Component} from "@angular/core";

@Component({
  selector: 'mine-sweeper',
  templateUrl: './mine-sweeper.html'
})
export class MineSweeperComponent {
  levels = [{name: 'Beginner', value: 6}, {name: 'Intermediate', value: 10}, {name: 'Expert', value: 14}];
  boardSize: number;

}
