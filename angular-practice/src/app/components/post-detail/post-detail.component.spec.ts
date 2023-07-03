import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostDetailComponent } from './post-detail.component';
import { PostService } from 'src/app/services/Post/post.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('PostDetailComponent', () => {
  let fixture: ComponentFixture<PostDetailComponent>;
  let mockActivatedRoute: any;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockPostService: jasmine.SpyObj<PostService>;

  beforeEach(() => {
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => {
            return '3';
          },
        },
      },
    };

    mockPostService = jasmine.createSpyObj(['getPost', 'updatePost']);
    mockLocation = jasmine.createSpyObj(['href']);

    TestBed.configureTestingModule({
      declarations: [PostDetailComponent],
      providers: [
        { provide: Location, useValue: mockLocation },
        { provide: PostService, useValue: mockPostService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
      imports: [FormsModule],
    });

    fixture = TestBed.createComponent(PostDetailComponent);
  });

  it('should render the post title in h2 template', () => {
    mockPostService.getPost.and.returnValue(
      of({
        id: 3,
        title: 'title 3',
        body: 'body 3',
      } as Post)
    );
    fixture.detectChanges();

    const element: HTMLElement = fixture.debugElement.query(
      By.css('h2')
    ).nativeElement;
    expect(element.textContent).toBe(fixture.componentInstance.post.title);
  });
});
