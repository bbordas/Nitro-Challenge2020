import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostGroupComponent } from './post-group.component';
import { PostSingleComponent } from './post-single/post-single.component';

describe('PostGroupComponent', () => {
  let component: PostGroupComponent;
  let fixture: ComponentFixture<PostGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostGroupComponent, PostSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create PostGroupComponent', () => {
    expect(component).toBeTruthy();
  });
});
