import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summery'
})
export class SummeryPipe implements PipeTransform {

  transform(value: string, lenght: number): unknown {

    if(lenght == 0){
      lenght=20;
    }
    return  value.substring(0, lenght) + "..";
  }

}
