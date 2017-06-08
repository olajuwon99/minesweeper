import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
import {MineSweeperComponent} from './mine-sweeper/mineSweeper';
import {BoardComponent} from './mine-sweeper/board';

@NgModule({
  declarations: [
    AppComponent,
    MineSweeperComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
