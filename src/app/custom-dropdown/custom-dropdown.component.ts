import { Component, OnInit, Input } from '@angular/core';
import { CustomDropdownPipe } from './custom-dropdown.pipe';

export enum KEY_CODE {
  UP_ARROW = 38,
  DOWN_ARROW = 40,
  TAB_KEY = 9,
  ENTER = 13
}

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {

  @Input()
  data: any[];

  @Input()
  valueField: string;

  dataList: string[];
  showDropDown: boolean;
  index: number;
  selectedValue: any;

  constructor(private customDropdownPipe: CustomDropdownPipe) {
    this.reset();
  }

  ngOnInit() {
    this.reset();
  }

  reset(): void {
    this.showDropDown = true;
    this.dataList = this.data;
  }

  onFocusEvent(): void {
    this.index = -1;
    this.showDropDown = true;
  }

  onBlurEvent(event: any): void {
    console.log(event);
    if (!event || !event.relatedTarget || !event.relatedTarget.className
      || event.relatedTarget.className !== 'custom-data-container') {
        this.showDropDown = true;
    }
  }

  onKeyDownEvent(event: KeyboardEvent): void {

    this.showDropDown = true;
    if (event.keyCode === KEY_CODE.UP_ARROW) {
       this.index = (this.index === 0) ? this.index : --this.index;
       this.selectedValue = this.data[this.index][this.valueField];
    }

    if (event.keyCode === KEY_CODE.DOWN_ARROW) {
      this.index = (this.index === this.data.length - 1) ? this.index : ++this.index;
      this.selectedValue = this.data[this.index][this.valueField];
    }
    // if(event.keyCode === KEY_CODE.TAB_KEY){
    //   this.textToSort = this.dataList[this.counter];
    //   this.showDropDown = false;
    // }
  }

  isSelected(currentItem: any): boolean {
      console.log(currentItem, this.index);
      if (this.index === currentItem) { return true; } else { return false; }
  }

  // onTabButtonAction(event: KeyboardEvent):void{
  //   console.log('event.keyCode',event.keyCode);
  // }


  toogleDropDown(): void {
    this.showDropDown = !this.showDropDown;
  }

  // textChange(value) {
  //   this.dummyDataList = [];
  //   if (value.length > 0) {
  //     this.dummyDataList = this.customDropdownPipe.transform(this.dataList, this.columnName, value);
  //     // console.log('this.dummyDataList',this.dummyDataList);
  //     if (this.dummyDataList) {this.showDropDown = true; }
  //   } else {
  //     this.reset();
  //   }
  // }

  selectValue(valueSelected: any) {
    this.selectedValue = valueSelected;
    this.showDropDown = false;
  }
}
