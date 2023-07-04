import { counterReducer } from "../my-counter/store/counter.reducer";
import { counterState } from "../my-counter/store/counter.state";
import { postsReducer } from "../posts/state/post.reducers";
import { PostState } from "../posts/state/post.state";

export interface AppState {
  counter: counterState;
  posts: PostState;
}

export const appReducer = {
  counter: counterReducer,
  posts: postsReducer,
};
