import { Component, OnInit } from '@angular/core';
import { TargetsService } from 'src/app/shared/sevices/targets.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-target-book',
  templateUrl: './target-book.component.html',
  styleUrls: ['./target-book.component.scss'],
})
export class TargetBookComponent implements OnInit {
  targetId: string = '';
  targetName: string = '';
  targetProducts: any[] = [];
  constructor(
    private ActivatedRouter: ActivatedRoute,
    private TargetsService: TargetsService,
    private title: Title,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.targetId = this.ActivatedRouter.snapshot.params['slug'];
    console.log('tarslug',this.targetId);
    
    this.TargetsService.getBookByTarget(this.targetId).subscribe((data) => {
      this.targetProducts = data.book;
      this.targetName = data.target.targetName;
      this.title.setTitle(this.targetName)
    });
  }
}
