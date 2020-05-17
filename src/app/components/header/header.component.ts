import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  constructor( private postService: PostService ) { }

  ngOnInit(): void {
  }

  filterPosts(key: string) {
    this.postService.getFilter(key);
  }
}
