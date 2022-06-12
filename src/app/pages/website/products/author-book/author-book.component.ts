import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MenuItem} from 'primeng/api';
import { Title } from '@angular/platform-browser';
import { AuthorService } from 'src/app/shared/sevices/author.service';
@Component({
  selector: 'app-author-book',
  templateUrl: './author-book.component.html',
  styleUrls: ['./author-book.component.scss']
})
export class AuthorBookComponent implements OnInit {
  author:any;
  books:any;
  slug:string = '';

  constructor(
    private AuthorService: AuthorService,
    private title: Title,
    private ActivatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.slug = this.ActivatedRoute.snapshot.params['slug'];
    this.AuthorService.getAuthorBySlug(this.slug).subscribe(data =>{
      this.author = data.author;
      this.books = data.Authbooks
      console.log(this.author);
      console.log(this.books);
      this.title.setTitle('' + this.author.authorName +'- Nhà Xuất Bản Kim Đồng'  )
    })
    
  }

}
