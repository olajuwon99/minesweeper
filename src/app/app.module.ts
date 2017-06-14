import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
import {MineSweeperComponent} from './mine-sweeper/mineSweeper';
import {BoardComponent} from './mine-sweeper/board';
import {PathResolverPipe} from "../environments/pathResolverPipe";
import { MdlSelectModule } from '@angular-mdl/select';

@NgModule({
  declarations: [
    AppComponent,
    MineSweeperComponent,
    BoardComponent,
    PathResolverPipe
  ],
  imports: [
    BrowserModule, FormsModule, MdlSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
