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
  constructor() { }

  ngOnInit(): void {

  }

}
