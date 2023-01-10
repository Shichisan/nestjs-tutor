import { MinLength, MaxLength } from 'class-validator';
import { Post } from 'src/graphql';

export class CreatePostInput extends Post {
  @MinLength(3)
  @MaxLength(255)
  title: string;
}
