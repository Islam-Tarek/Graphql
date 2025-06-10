import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { DriverModule } from './modules/driver/driver.module';
import { CarModule } from './modules/car/car.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      introspection: true,
    }),
    MongooseModule.forRoot('mongodb://localhost/graphql_lab1'),
    DriverModule,
    CarModule,
  ],
})
export class AppModule {}
