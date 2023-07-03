import { Post } from 'src/app/models/Post';
import { PostComponent } from './post.component';
import { first } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('PostComponent', () => {
  let fixture: ComponentFixture<PostComponent>;
  let component: PostComponent;
  let post: Post;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(PostComponent);

    component = fixture.componentInstance;

    post = { id: 1, body: 'body 1', title: 'title 1' };
  });

  it('should create post component using TestBed', () => {
    expect(component).toBeDefined();
  });

  it('should render the post title in the anchor element', () => {
    component.post = post;
    const postElement: HTMLElement = fixture.nativeElement;
    fixture.detectChanges();
    const a = postElement.querySelector('a');
    expect(a?.textContent).toContain(post.title);
  });

  it('should render the post title in the anchor element using debug element', () => {
    component.post = post;
    const postDebugElement = fixture.debugElement;
    fixture.detectChanges();
    const aElement = postDebugElement.query(By.css('a')).nativeElement;
    // const aElement = postDebugElement.nativeElement.querySelector('a');
    expect(aElement?.textContent).toContain(post.title);
  });

  it('should raise an event when the delete post is clicked', () => {
    component.post = post;
    component.delete.pipe(first()).subscribe((selectedPost) => {
      expect(selectedPost).toEqual(post);
    });

    component.onDeletePost(new MouseEvent('click'));
  });
});
