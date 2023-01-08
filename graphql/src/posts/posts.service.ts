import { Injectable } from '@nestjs/common';
import { Author, Post } from 'src/graphql';

@Injectable()
export class PostsService {
  private readonly posts: Array<Post> = [
    {
      id: 1,
      title: 'title',
      votes: 0,
    },
  ];

  findAll({ authorId }: { authorId: Author['id'] }) {
    console.log({ authorId });
    return this.posts;
  }

  upvoteById({ id }: { id: Post['id'] }): void {
    const foundPost = this.posts.find((p) => p.id === id);
    if (!foundPost) return;

    if (foundPost.votes) {
      foundPost.votes += 1
    }
  }
}
