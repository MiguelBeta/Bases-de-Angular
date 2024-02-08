import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFly implements PipeTransform {

  transform( value: boolean ): 'si' | 'no' {

    return  value ? 'si' : 'no';
  }
}
