import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {PostService} from '../../services/post.service';

const mockPostService = {
  getFilter: () => {}
};
const KEY = 'key';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockGetFilterSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        {
          provide: PostService,
          useValue: mockPostService
        }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockGetFilterSpy = spyOn(mockPostService, 'getFilter');
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create HeaderComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call mockGetFilterSpy with key', () => {
    component.filterPosts(KEY);
    expect(mockGetFilterSpy).toHaveBeenCalledWith(KEY);
  });
});
