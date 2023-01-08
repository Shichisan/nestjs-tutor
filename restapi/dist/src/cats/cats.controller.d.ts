import { CreateCatDto, UpdateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
export declare class CatsController {
    private service;
    constructor(service: CatsService);
    create(createCatDto: CreateCatDto): Promise<void>;
    findAll(): Promise<Array<Cat>>;
    findOne(id: number): string;
    update(id: string, updateCatDto: UpdateCatDto): string;
    remove(id: string): string;
}
