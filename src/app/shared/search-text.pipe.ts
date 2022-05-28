import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchText'
})
export class SearchTextPipe implements PipeTransform {

  transform(value: any, args: any): any {
    console.log(value);
    console.log(args);
    const filteredArray: Array<any> = [];
    if (!args) {
      return value;
    } else {
      value.forEach((element: any) => {
        if (element.name.toLowerCase().includes(args.toLowerCase())) {
          filteredArray.push(element);
        }
      });
      return filteredArray;
    }
    return null;
  }

}
