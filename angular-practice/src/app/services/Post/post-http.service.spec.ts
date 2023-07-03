import { TestBed } from '@angular/core/testing';
import { PostService } from './post.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('postService (HttpClientTestingModule)', () => {
  let postService: PostService;
  let httpTestingController: HttpTestingController;
  let posts = [
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostService],
      imports: [HttpClientTestingModule],
    });

    postService = TestBed.inject(PostService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  describe('getPosts()', () => {
    it('should return posts when getPosts() is called', () => {
      postService.getPosts().subscribe((data) => {
        expect(data).toEqual(posts);
      });
      const request = httpTestingController.expectOne(
        'https://jsonplaceholder.typicode.com/posts'
      );
      request.flush(posts);
      expect(request.request.method).toBe('GET');
    });
  });

  describe('getPost()', () => {
    it('should return single post when get post is called with post id', () => {
      postService.getPost(1).subscribe();
    //   postService.getPost(2).subscribe();
      const request = httpTestingController.expectOne(
        'https://jsonplaceholder.typicode.com/posts/1'
      );
      expect(request.request.method).toBe('GET');
    });
  });

  afterEach(() => {
    //sees on only the specified URL is called only ones will check if any other URLs called or not
    httpTestingController.verify();
  });
});
