import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';

import { AppService } from './app.service';
import { UserBlog } from './app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  @Input()
  username: String = '@aks1357';

  @Input()
  blogs: Boolean = false;

  @Input()
  blogTitle: String = 'Blogs';

  @Input()
  blogClass: String = 'blogs-wrapper';

  @Input()
  author: Boolean = false;

  @Input()
  authorTitle: String = 'Author Info';

  @Input()
  authorClass: String = 'author-wrapper';

  public userBlogs: UserBlog;
  public loading: Boolean = false;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    if (this.blogs || this.author) {
      this.loading = true;
      this.appService.getUserBlogs(this.username).subscribe(response => {
        this.loading = false;
        this.userBlogs = response;
      });
    }
  }
}
