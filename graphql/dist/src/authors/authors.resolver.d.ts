import { PostsService } from 'src/posts/posts.service';
import { AuthorsService } from './authors.service';
import { Author, Post } from 'src/graphql';
export declare class AuthorsResolver {
    private authorsService;
    private postsService;
    constructor(authorsService: AuthorsService, postsService: PostsService);
    getAuthor(id: Author['id']): Promise<Author | undefined>;
    getPosts(author: Author): Promise<Array<Post>>;
    upvotePost(postId: Post['id']): Promise<void>;
}
