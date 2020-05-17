import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import _uniq from 'lodash/uniq';
import _sortBy from 'lodash/sortBy';
import _reverse from 'lodash/reverse';
import getWeek from 'date-fns/getWeek';

import { Post } from './post.model';

export enum FILTER {
  week = 'time',
  default = 'id',
  location = 'location',
  author = 'author'
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [
    new Post(
      0,
      'San Francisco',
      '1552657573',
      'Happy User',
      'Proper PDF conversion ensures that every element of your document remains just as you left it.'),
    new Post(
      1,
      'San Francisco',
      '1552571173',
      'Happy User',
      'The modern workplace is increasingly digital, and workflows are constantly evolving. '),
    new Post(
      2,
      'San Francisco',
      '1552571174',
      'Happy Developer',
      'Digital transformation isn’t just a buzzword'),
    new Post(
      3,
      'Sydney',
      '1552563973',
      'Happy Developer',
      'An expectation of digital efficiency has become the norm in our daily lives'),
    new Post(
      4,
      'Dublin',
      '1553080742',
      'Happy Manager',
      'A modern PDF annotator that can accommodate all of the cooks in a very busy kitchen is what your employees really need.'),
    new Post(
      5,
      'Dublin',
      '1553099742',
      'Happy Manager',
      'An integrated productivity solution breaks information through barriers and allows workers to collaborate in real time.')
  ];

  constructor() { }

  onFilterSelected = new Subject<string>();
  onEdited = new Subject<Post[]>();
  filter: FILTER;

  getPosts(name: string, filter: string) {
    let posts;
    switch (filter) {
      case FILTER.week:
        posts = this.posts.slice().filter( post =>
          getWeek(post[filter] * 1000) === +name.split(' ')[1]);
        break;
      case FILTER.default:
        posts = this.posts.slice();
        break;
      default:
        posts = this.posts.slice().filter(post => post[filter] === name);
        break;
    }
    return _reverse(_sortBy(posts, [post => post.time]));
  }

  getFilter(key: string) {
    this.onFilterSelected.next(key);
  }

  setFilter(filter: FILTER) {
    this.filter = filter;
  }

  getPostGroupNames(filter: string) {
    const postGroupNames = [];

    switch (filter) {
      case FILTER.week:
        this.posts.forEach(post =>
          postGroupNames.push(`Week ${getWeek( post[filter] * 1000 )}`));
        break;
      default:
        this.posts.forEach(post => postGroupNames.push(post[filter]));
        break;
    }
    return _uniq(postGroupNames);
  }

  updatePost(post: Post) {
    this.posts[post.id] = post;
    this.onEdited.next(this.posts.slice());
    this.onFilterSelected.next(this.filter);
  }
}
