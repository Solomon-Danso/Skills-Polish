import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversePipe',
  standalone: true
})
export class ReversePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
