import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarResolver } from './car.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from '../../models/graphql/car.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }])],
  providers: [CarResolver, CarService],
  exports: [CarService],
})
export class CarModule {}
