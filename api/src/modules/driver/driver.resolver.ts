import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Driver } from '../../models/graphql/driver.schema';
import { Car } from '../../models/graphql/car.schema';
import { DriverService } from './driver.service';

@Resolver(() => Driver)
export class DriverResolver {
  constructor(private driverService: DriverService) {}

  @Query(() => [Driver])
  async drivers(): Promise<Driver[]> {
    return this.driverService.findAll();
  }

  @Query(() => Driver)
  async driver(@Args('name') driverName: string): Promise<Driver> {
    return this.driverService.findOne(driverName);
  }

  @ResolveField('cars', () => [Car])
  async getCars(@Parent() driver: Driver) {
    return driver.cars;
  }
}
