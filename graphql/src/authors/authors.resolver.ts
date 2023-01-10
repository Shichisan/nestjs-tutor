import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PostsService } from 'src/posts/posts.service';
import { AuthorsService } from './authors.service';
import { Author, Post } from 'src/graphql';

@Resolver('Author')
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query('author')
  async getAuthor(@Args('id') id: Author['id']): Promise<Author | undefined> {
    return this.authorsService.findOneById(id);
  }

  @ResolveField('posts')
  async getPosts(@Parent() author: Author): Promise<Array<Post>> {
    return this.postsService.findAll({ authorId: author.id });
  }

  @Mutation()
  async upvotePost(
    @Args('postId') postId: Post['id'],
  ): Promise<void> {
    this.postsService.upvoteById({ id: postId });
  }
}
