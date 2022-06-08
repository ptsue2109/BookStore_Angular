import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliders-books',
  templateUrl: './sliders-books.component.html',
  styleUrls: ['./sliders-books.component.scss']
})
export class SlidersBooksComponent implements OnInit {
  @Input() books: any;
  @Input() link: any;
  @Input() slug: any
  constructor() { }
  ngOnInit(): void {
  }

}
