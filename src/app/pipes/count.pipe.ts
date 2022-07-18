import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    if (value > 0) {
      return 'In stock';
    } else {
      return 'Out of stock';
    }
  }

  

}
