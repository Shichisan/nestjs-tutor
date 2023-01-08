export declare class CreatePostInput {
    title: string;
    votes?: Nullable<number>;
}
export declare class Author {
    id: number;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    posts?: Nullable<Nullable<Post>[]>;
}
export declare class Post {
    id: number;
    title: string;
    votes?: Nullable<number>;
}
export declare abstract class IQuery {
    abstract author(id: number): Nullable<Author> | Promise<Nullable<Author>>;
}
type Nullable<T> = T | null;
export {};
