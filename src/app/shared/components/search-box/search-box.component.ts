import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: 'search-box.component.html'
})

export class SearchBoxComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  @Input()
  public placeholder: string = '';



}
