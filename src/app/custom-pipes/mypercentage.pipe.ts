import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompercent'
})
export class MypercentagePipe implements PipeTransform {

  transform(value: number, points: number): unknown {
    return (value / 500 * 100).toFixed(points) + '%';
  }

}
