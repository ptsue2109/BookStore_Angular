import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { swal, swalMessage } from '../../../../shared/uiHelpers/swal/swal.module';
import { SlidersService } from './../../../../shared/sevices/slider.service';
@Component({
  selector: 'app-sliders-list',
  templateUrl: './sliders-list.component.html',
  styleUrls: ['./sliders-list.component.scss']
})
export class SlidersListComponent implements OnInit {
  sliders: any;
  constructor(
    private SlidersService: SlidersService, private Title: Title
  ) { this.Title.setTitle('Sliders - List'); }

  ngOnInit(): void {
    this.SlidersService.getAll().subscribe(data => {
      this.sliders = data.item
      console.log(this.sliders);
    })
  }
  deleteItem(_id: string) {
    swalMessage('Do you want delete?', 'OK', 'Cancel').then((result) => {
      if (result.isConfirmed) {
        this.SlidersService.remove(_id).subscribe((data) => {
          swal('delete skill', 'You add skill successfully !', 'success');
          this.sliders = this.sliders.filter((item: any) => item._id !== _id);
        });
      }
    });
  }

}
