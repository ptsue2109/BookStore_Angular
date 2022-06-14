import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-cover',
  templateUrl: './book-cover.component.html',
  styleUrls: ['./book-cover.component.scss']
})
export class BookCoverComponent implements OnInit {
@Input() data :any
@Input() cateName:any;
@Input () authorInfo :any
@Input() searchResult:any
@Input ()keyword:any
  constructor() { }

  ngOnInit(): void {

  }
  filter_bookName(){
    console.log('filter book name');
    
  }
}
