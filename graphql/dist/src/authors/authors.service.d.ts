import { Author } from 'src/graphql';
export declare class AuthorsService {
    private readonly authors;
    findOneById(id: Author['id']): Author | undefined;
}
