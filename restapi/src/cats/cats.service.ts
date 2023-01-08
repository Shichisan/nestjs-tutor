import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Array<Cat> = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  async findAll(): Promise<Array<Cat>> {
    return this.cats;
  }
}
