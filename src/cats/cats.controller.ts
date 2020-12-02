import {
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Cat> {
    console.log(params);
    return this.catsService.findOne(params.id);
  }

  @Put(':id')
  update(@Param() params, @Body() body) {
    return this.catsService.update(params.id, body);
  }

  @Delete(':id')
  delete(@Param() params): Cat[] {
    return this.catsService.delete(params.id);
  }
}
