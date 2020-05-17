import { Component, Input, OnInit } from '@angular/core';

import { Post } from '../../../../services/post.model';
import { PostService } from '../../../../services/post.service';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.less']
})
export class PostSingleComponent implements OnInit {
  @Input() post: Post;

  constructor(private postService: PostService) {}

  ngOnInit() {}

  onEdit(value: any, attribute: string) {
    this.post[attribute] = value;
    this.postService.updatePost(this.post);
  }
}
