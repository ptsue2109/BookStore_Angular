import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/sevices/category.service';
import { Title } from '@angular/platform-browser';
import { swal,swalMessage } from 'src/app/shared/uiHelpers/swal/swal.module';
@Component({
  selector: 'app-admin-cate-list',
  templateUrl: './admin-cate-list.component.html',
  styleUrls: ['./admin-cate-list.component.scss']
})
export class AdminCateListComponent implements OnInit {
  categories: any
  constructor(
    private CateS: CategoryService,
    private title: Title
  ) {
    this.title.setTitle("Categories - List ")
  }

  ngOnInit(): void {
    this.CateS.getAll().subscribe(data => {
     this.categories = data.categories;
     console.log(data.categories);
     
    })
  }
  deleteItem(_id: string){
    swalMessage('Do you want delete?', 'OK', 'Cancel').then((result) => {
      if (result.isConfirmed) {
        this.CateS.removeCate(_id).subscribe((data) => {
          swal('delete skill', 'You add skill successfully !', 'success');
          this.categories = this.categories.filter((item: any) => item._id !== _id);
        });
      }
    });
    
  }
}
