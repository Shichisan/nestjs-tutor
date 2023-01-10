import { Injectable } from '@nestjs/common';
import { Author } from 'src/graphql';

@Injectable()
export class AuthorsService {
  private readonly authors: Array<Author> = [
    {
      id: 1,
      firstName: 'hoge',
      lastName: 'fuga',
      posts: [],
    },
  ];

  findOneById(id: Author['id']) {
    return this.authors.find((a) => a.id === id);
  }
}
