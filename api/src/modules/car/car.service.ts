import { Injectable } from '@nestjs/common';
import { Car, CarDocument } from '../../models/graphql/car.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import type { CarDocument } from '../../models/graphql/car.schema';

@Injectable()
export class CarService {
  constructor(@InjectModel(Car.name) private carModel: Model<CarDocument>) {}
  async findAll(): Promise<CarDocument[]> {
    return await this.carModel.find().exec();
  }
}
