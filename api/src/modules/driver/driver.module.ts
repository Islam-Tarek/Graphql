import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Driver, DriverSchema } from '../../models/graphql/driver.schema';
import { DriverService } from './driver.service';
import { DriverResolver } from './driver.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Driver.name, schema: DriverSchema }]),
  ],
  providers: [DriverService, DriverResolver],
  exports: [DriverService],
})
export class DriverModule {}
