import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ParseIntPipe implements PipeTransform<string, number> {
    transform(value: any, metadata: ArgumentMetadata): number;
}
