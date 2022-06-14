import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-order-data',
  templateUrl: './order-data.component.html',
  styleUrls: ['./order-data.component.scss']
})
export class OrderDataComponent implements OnInit {
@Input () data:any
  constructor() { }

  ngOnInit(): void {
  }

}
