import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  imports: [CreateCatDto],
})
export class CatsModule {}
