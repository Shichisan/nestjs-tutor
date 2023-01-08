import { Author, Post } from 'src/graphql';
export declare class PostsService {
    private readonly posts;
    findAll({ authorId }: {
        authorId: Author['id'];
    }): Post[];
    upvoteById({ id }: {
        id: Post['id'];
    }): void;
}
