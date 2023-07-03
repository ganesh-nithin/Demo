import { Post } from 'src/app/models/Post';
import { PostsComponent } from './posts.component';
import { of } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostService } from 'src/app/services/Post/post.service';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PostComponent } from '../post/post.component';

describe('PostsComponent', () => {
  let posts: Post[];
  let component: PostsComponent;
  let mockPostService: any;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(() => {
    posts = [
      {
        id: 1,
        body: 'body 1',
        title: 'title 1',
      },
      {
        id: 2,
        body: 'body 2',
        title: 'title 2',
      },
      {
        id: 3,
        body: 'body 3',
        title: 'title 3',
      },
    ];
    mockPostService = jasmine.createSpyObj(['getPosts', 'deletePost']);

    TestBed.configureTestingModule({
      declarations: [PostsComponent, PostComponent],
      providers: [
        {
          provide: PostService,
          useValue: mockPostService,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
  });

  it('should create exact same number of Post Component with Posts', () => {
    mockPostService.getPosts.and.returnValue(of(posts));
    fixture.detectChanges();
    const postComponentDEs = fixture.debugElement.queryAll(
      By.directive(PostComponent)
    );
    expect(postComponentDEs.length).toEqual(posts.length);
  });

  it('should check weather exact post is ending to PostComponent', () => {
    mockPostService.getPosts.and.returnValue(of(posts));
    fixture.detectChanges();
    const postComponentDEs = fixture.debugElement.queryAll(
      By.directive(PostComponent)
    );

    for (let i = 0; i < postComponentDEs.length; i++) {
      let postComponentInstanse = postComponentDEs[i]
        .componentInstance as PostComponent;
      expect(postComponentInstanse.post).toEqual(posts[i]);
    }
  });

  it('should create one post element element for each post', () => {
    mockPostService.getPosts.and.returnValue(of(posts));
    fixture.detectChanges();
    const debugElement = fixture.debugElement;
    const postsElement = debugElement.queryAll(By.css('.posts'));
    expect(postsElement.length).toBe(posts.length);
  });

  it('should set posts from the service directly', () => {
    mockPostService.getPosts.and.returnValue(of(posts));
    fixture.detectChanges();
    expect(component.posts).toEqual(posts);
  });

  describe('delete', () => {
    beforeEach(() => {
      mockPostService.deletePost.and.returnValue(of(true));
      component.posts = posts;
      component.delete(posts[2]);
    });

    it('should delete the selected Post from the posts', () => {
      expect(component.posts).not.toContain(posts[2]);
    });

    it('should call the delete methodin Post Service only once', () => {
      expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
    });

    it('should call delete method when post component button is clicked', () => {
      spyOn(component, 'delete');
      mockPostService.getPosts.and.returnValue(of(posts));
      fixture.detectChanges();

      const postComponentDEs = fixture.debugElement.queryAll(
        By.directive(PostComponent)
      );

      for (let i = 0; i < postComponentDEs.length; i++) {
        postComponentDEs[i]
          .query(By.css('button'))
          .triggerEventHandler('click', { stopPropagation: () => {} });

        expect(component.delete).toHaveBeenCalledWith(posts[i]);
      }
    });

    it('shuold call the delete method when the delete event is emitted in Post Component', () => {
      spyOn(component, 'delete');
      mockPostService.getPosts.and.returnValue(of(posts));
      fixture.detectChanges();

      const postComponentDEs = fixture.debugElement.queryAll(
        By.directive(PostComponent)
      );

      for (let i = 0; i < postComponentDEs.length; i++) {
        let componentInstance = postComponentDEs[i].componentInstance;
        componentInstance.delete.emit(posts[i]);

        expect(component.delete).toHaveBeenCalledWith(posts[i]);
      }
    });
  });
});
