import { Post } from "src/app/models/posts.model";

export interface PostState {
  posts: Post[];
}

export const initialState: PostState = {
  posts: [
    { id: "1", title: "T1", description: "D1" },
    { id: "2", title: "T2", description: "D2" },
  ],
};
