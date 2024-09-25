import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'launchDate'
  

})
export class LaunchDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
