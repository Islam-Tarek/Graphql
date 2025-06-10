import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Driver, DriverDocument } from '../../models/graphql/driver.schema';

@Injectable()
export class DriverService {
  constructor(
    @InjectModel(Driver.name) private driverModel: Model<DriverDocument>,
  ) {}

  async findAll(): Promise<Driver[]> {
    try {
      const drivers = await this.driverModel.find().populate('cars').exec();
      return drivers;
    } catch (error: unknown) {
      this.handleError(error, 'Failed to fetch drivers');
    }
  }

  async findOne(id: string): Promise<Driver> {
    try {
      const driver = await this.driverModel
        .findById(id)
        .populate('cars')
        .exec();
      if (!driver) {
        throw new NotFoundException(`Driver with ID ${id} not found`);
      }
      return driver;
    } catch (error: unknown) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      this.handleError(error, 'Failed to fetch driver');
    }
  }

  private handleError(error: unknown, defaultMessage: string): never {
    if (error instanceof Error) {
      throw new Error(`${defaultMessage}: ${error.message}`);
    }
    throw new Error(defaultMessage);
  }
}
