import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sliders-banner',
  templateUrl: './sliders-banner.component.html',
  styleUrls: ['./sliders-banner.component.scss']
})
export class SlidersBannerComponent implements OnInit {
@Input () sliders:any
  constructor() { }
  responsiveOptions:any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
  },
  {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
  },
  {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
  }
];
  ngOnInit(): void {
  }

}
