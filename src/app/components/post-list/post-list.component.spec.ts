import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListComponent } from './post-list.component';
import { PostGroupComponent } from './post-group/post-group.component';
import { FILTER, PostService } from '../../services/post.service';
import { of } from 'rxjs';

const mockPostService = {
  getPosts: () => {},
  onFilterSelected: of({}),
  getPostGroupNames: () => {
    return GROUP_NAMES;
  },
  setFilter: () => {},
};
const NAME_DEFAULT = 'All post';
const GROUP_NAMES = ['Name1', 'Name2', 'Name3'];

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let setFilterSpy: jasmine.Spy;
  let getPostGroupNamesSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListComponent, PostGroupComponent ],
      providers: [
        {
          provide: PostService,
          useValue: mockPostService
        }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    setFilterSpy = spyOn(mockPostService, 'setFilter').and.callThrough();
    getPostGroupNamesSpy = spyOn(mockPostService, 'getPostGroupNames').and.callThrough();
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
  });

  it('should create PostListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should set filter to FILTER.default and groupNames to  NAME_DEFAULT', () => {
    mockPostService.onFilterSelected = of(FILTER.default);
    component.ngOnInit();

    expect(component.filter).toEqual(FILTER.default);
    expect(component.groupNames).toEqual([NAME_DEFAULT]);
    expect(setFilterSpy).toHaveBeenCalledWith(FILTER.default);
  });

  it('should set filter to FILTER.week and groupNames to  GROUP_NAMES', () => {
    mockPostService.onFilterSelected = of(FILTER.week);
    component.ngOnInit();

    expect(component.filter).toEqual(FILTER.week);
    expect(component.groupNames).toEqual(GROUP_NAMES);
    expect(getPostGroupNamesSpy).toHaveBeenCalledWith(FILTER.week);
  });
});
