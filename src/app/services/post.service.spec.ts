import {TestBed} from '@angular/core/testing';

import { FILTER, PostService } from './post.service';
import { Post } from './post.model';

const ORIGINAL_POSTS: Post[] = [
  {
    id: 0,
    location: 'San Francisco',
    time: '1552657573',
    author: 'Happy User',
    text: 'Proper PDF conversion ensures that every element of your document remains just as you left it.'
  },
  {
    id: 1,
    location: 'San Francisco',
    time: '1552571173',
    author: 'Happy User',
    text: 'The modern workplace is increasingly digital, and workflows are constantly evolving. '
  },
  {
    id: 2,
    location: 'San Francisco',
    time: '1552571174',
    author: 'Happy Developer',
    text: 'Digital transformation isn’t just a buzzword'
  },
  {
    id: 3,
    location: 'Sydney',
    time: '1552563973',
    author: 'Happy Developer',
    text: 'An expectation of digital efficiency has become the norm in our daily lives'
  },
  {
    id: 4,
    location: 'Dublin',
    time: '1553080742',
    author: 'Happy Manager',
    text: 'A modern PDF annotator that can accommodate all of the cooks in a very busy kitchen is what your employees really need.'
  },
  {
    id: 5,
    location: 'Dublin',
    time: '1553099742',
    author: 'Happy Manager',
    text: 'An integrated productivity solution breaks information through barriers and allows workers to collaborate in real time.'
  }];
const POST_UPDATE: Post = {
  id: 0,
  location: 'Updated To Dublin',
  time: '1552657573',
  author: 'Happier Developer',
  text: 'Proper PDF conversion ensures that every element of your document remains just as you left it.'
};
const ORDERED_BY_TIME_AND_REVERSED_POSTS: Post[] = [
  {
    id: 5,
    location: 'Dublin',
    time: '1553099742',
    author: 'Happy Manager',
    text: 'An integrated productivity solution breaks information through barriers and allows workers to collaborate in real time.'
  },
  {
    id: 4,
    location: 'Dublin',
    time: '1553080742',
    author: 'Happy Manager',
    text: 'A modern PDF annotator that can accommodate all of the cooks in a very busy kitchen is what your employees really need.'
  },
  {
    id: 0,
    location: 'San Francisco',
    time: '1552657573',
    author: 'Happy User',
    text: 'Proper PDF conversion ensures that every element of your document remains just as you left it.'
  },
  {
    id: 2,
    location: 'San Francisco',
    time: '1552571174',
    author: 'Happy Developer',
    text: 'Digital transformation isn’t just a buzzword'
  },
  {
    id: 1,
    location: 'San Francisco',
    time: '1552571173',
    author: 'Happy User',
    text: 'The modern workplace is increasingly digital, and workflows are constantly evolving. '
  },
  {
    id: 3,
    location: 'Sydney',
    time: '1552563973',
    author: 'Happy Developer',
    text: 'An expectation of digital efficiency has become the norm in our daily lives'
  }];

const UNIQUE_BY_ID = [0, 1, 2, 3, 4, 5];
const UNIQUE_BY_LOCATION = ['San Francisco', 'Sydney', 'Dublin'];
const UNIQUE_BY_AUTHOR = ['Happy User', 'Happy Developer', 'Happy Manager'];
const UNIQUE_BY_TIME = ['Week 11', 'Week 12'];

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostService);
    service.posts = ORIGINAL_POSTS;
  });
  afterEach(() => {
    service.posts = ORIGINAL_POSTS;
  });
  it('should create PostService', () => {
    expect(service).toBeTruthy();
  });
  it('should return GroupNames UNIQUE_BY_ID', () => {
    expect(service.getPostGroupNames(FILTER.default)).toEqual(UNIQUE_BY_ID);
  });
  it('should return GroupNames UNIQUE_BY_LOCATION', () => {
    expect(service.getPostGroupNames(FILTER.location)).toEqual(UNIQUE_BY_LOCATION);
  });
  it('should return GroupNames UNIQUE_BY_AUTHOR', () => {
    expect(service.getPostGroupNames(FILTER.author)).toEqual(UNIQUE_BY_AUTHOR);
  });
  it('should return GroupNames UNIQUE_BY_TIME with calculated week value', () => {
    expect(service.getPostGroupNames(FILTER.week)).toEqual(UNIQUE_BY_TIME);
  });
  it('should return ORDERED_BY_TIME_AND_REVERSED_POSTS when filter is set to default', () => {
    expect(service.getPosts('', FILTER.default)).toEqual(ORDERED_BY_TIME_AND_REVERSED_POSTS);
  });
  it('should update ORIGINAL_POSTS[POST_UPDATE.id] to POST_UPDATE', () => {
    service.updatePost(POST_UPDATE);
    expect(ORIGINAL_POSTS[POST_UPDATE.id]).toEqual(POST_UPDATE);
  });
});
