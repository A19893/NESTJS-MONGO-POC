import { Module } from '@nestjs/common';
import { ResultController } from './result.controller';
import { ResultService } from './result.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './result.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [ResultController],
  providers: [ResultService],
})

export class ResultModule {}
