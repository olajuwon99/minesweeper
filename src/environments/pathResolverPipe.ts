import { Pipe, PipeTransform } from '@angular/core';
import {environment} from "./environment";

@Pipe({name: 'pathResolver'})
export class PathResolverPipe implements PipeTransform {
  transform(path: string): string {

    return environment.production ? path.replace(/assets/i, 'minesweeper/assets') : path;
  }
}
