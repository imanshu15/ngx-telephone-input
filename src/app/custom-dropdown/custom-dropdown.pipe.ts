import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'drop-down-filter'
})
export class CustomDropdownPipe implements PipeTransform {
  transform(dataToSort: string[], columnNameToSort: string, stringToSort: string): any[] {
    let sortedData: string[];
    sortedData = [];
    for (const data of dataToSort) {
      if (data[columnNameToSort].search(stringToSort) > -1) {
          sortedData.push(data);
    }
    }

    return sortedData;
  }
}
