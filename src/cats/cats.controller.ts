import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
  HttpException,
  HttpStatus,
  NotFoundException,
  UseFilters,
  ForbiddenException,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';
import { CreateCatDto, UpdateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { HttpExceptionFilter } from 'src/http-exception/http-exception.filter';
import { ValidationPipe } from 'src/validation/validation.pipe';
import { ParseIntPipe } from 'src/parse-int/parse-int.pipe';
import { RolesGuard } from 'src/roles/roles.guard';
import { Roles } from 'src/roles/roles.decorator';
// import { JoiValidationPipe } from 'src/joi-validation/joi-validation.pipe';
// import { createCatSchema } from 'src/schema/cats/createCatSchema';

@Controller('cats')
@UseGuards(RolesGuard)
// @UseFilters(new HttpExceptionFilter())
export class CatsController {
  constructor(private service: CatsService) {}

  @Post()
  // @SetMetadata('roles', ['admin']) を直接使用するのは良い習慣ではないため、カスタムデコレータを作成する
  @Roles('admin')
  @UseFilters(new HttpExceptionFilter()) // createアクションのみに適用されるscopeのためcontroller全体に適用したいcontroller-scopeにする場合はcontrollerのクラス定義の上に挿入する
  // 下記がObject Schema Validationの方法
  // @UsePipes(new JoiValidationPipe(createCatSchema))
  // 下記のやり方はclass-validatorのやり方
  async create(
    @Body(new ValidationPipe()) createCatDto: CreateCatDto,
  ): Promise<void> {
    try {
      this.service.create(createCatDto);
    } catch (_) {
      throw new ForbiddenException();
    }
  }

  @Get()
  async findAll(): Promise<Array<Cat>> {
    try {
      const allCats = await this.service.findAll();
      if (allCats.length === 0) {
        throw new NotFoundException();
      }

      return allCats;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  // @Get(':id')
  // findById(@Param() { id }: Request['params']): string {
  //   return `This action requested by id: ${id}`;
  // }
  // 以下のようにParamを参照することもできる
  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id: number): string {
    console.log({ id });
    return `This action requested by id: ${id}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto): string {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `This actions removes a #${id} cat`;
  }
}
