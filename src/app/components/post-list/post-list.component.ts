import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PostService, FILTER } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less']
})
export class PostListComponent implements OnInit, OnDestroy {
  groupNames = ['All post'] ;
  filter = FILTER.default;

  private subscription = new Subscription();

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.subscription = this.postService.onFilterSelected
      .subscribe(
        (filter: FILTER) => {
          this.filter = filter;
          this.postService.setFilter(filter);
          this.filter === FILTER.default ?
            this.groupNames = ['All post']
            : this.groupNames = this.postService.getPostGroupNames(filter);
        });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getPosts(name: string, filter: string) {
    return this.postService.getPosts(name, filter);
  }
}
