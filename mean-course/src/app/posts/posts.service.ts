import { Post } from './posts.model';
import { Subject } from 'rxjs';


export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();
  getPosts() {
    return [...this.posts];
  }

  getPostUpdatedListener() {
    return this.postsUpdated.asObservable();
  }
  addPost(post: Post) {
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
