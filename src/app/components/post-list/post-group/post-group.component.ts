import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../services/post.model';

@Component({
  selector: 'app-post-group',
  templateUrl: './post-group.component.html',
  styleUrls: ['./post-group.component.less']
})
export class PostGroupComponent implements OnInit {
  @Input() posts: Post[];
  @Input() groupName: string;
  @Input() isCollapsed: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
