import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: 'search-box.component.html'
})

export class SearchBoxComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue:EventEmitter<string> = new EventEmitter();

  emitText(text:string):void{
    this.onValue.emit(text)
  }

}
