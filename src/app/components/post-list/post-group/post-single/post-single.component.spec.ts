import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSingleComponent } from './post-single.component';
import { PostService } from '../../../../services/post.service';
import { PostEditComponent } from '../../../post-edit/post-edit.component';
import { Post } from '../../../../services/post.model';

const mockPostService = {
  updatePost: () => {}
};

const POST: Post = {
  id: 1,
  location: 'under lockdown',
  time: '1552657573',
  author: 'Developer',
  text: ''
};

const UPDATED_POST: Post = {
  id: 1,
  location: 'walkin\' free',
  time: '1552657573',
  author: 'Developer',
  text: ''
};

describe('PostSingleComponent', () => {
  let component: PostSingleComponent;
  let fixture: ComponentFixture<PostSingleComponent>;
  let mockPostServiceSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSingleComponent, PostEditComponent ],
      providers: [
        {
         provide: PostService,
         useValue: mockPostService
        }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockPostServiceSpy = spyOn(mockPostService, 'updatePost');
    fixture = TestBed.createComponent(PostSingleComponent);
    component = fixture.componentInstance;
    component.post = POST;
    fixture.detectChanges();
  });

  it('should create PostSingleComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call updatePost service with UPDATED_POST', () => {
    component.onEdit('walkin\' free', 'location');
    expect(mockPostServiceSpy).toHaveBeenCalledWith(UPDATED_POST);
  });
});
