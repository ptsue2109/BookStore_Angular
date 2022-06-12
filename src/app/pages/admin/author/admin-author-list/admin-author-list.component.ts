import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/shared/sevices/author.service';
import { Title } from '@angular/platform-browser';
import { swal, swalMessage } from './../../../../shared/uiHelpers/swal/swal.module';
@Component({
  selector: 'app-admin-author-list',
  templateUrl: './admin-author-list.component.html',
  styleUrls: ['./admin-author-list.component.scss']
})
export class AdminAuthorListComponent implements OnInit {
  authors:any
  constructor(
    private AuthorService: AuthorService,
    private title: Title

  ) { 
    this.title.setTitle("Admin - Authors")
  }

  ngOnInit(): void {
    this.AuthorService.getAll().subscribe(data =>{
      this.authors = data.author;
      console.log(this.authors);
      
    })
  }
  deleteItem(_id: string){
    swalMessage('Do you want delete?', 'OK', 'Cancel').then((result) => {
      if (result.isConfirmed) {
        this.AuthorService.remove(_id).subscribe((data) => {
          swal('delete skill', 'You add skill successfully !', 'success');
          this.authors = this.authors.filter((item: any) => item._id !== _id);
        });
      }
    });
    
  }

}
