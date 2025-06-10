import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Car } from './car.schema';

@ObjectType()
@Schema()
export class Driver {
  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => Int)
  @Prop()
  age: number;

  @Field(() => [Car])
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Car', default: [] }] })
  cars: Car[];
}

export type DriverDocument = Driver & Document;
export const DriverSchema = SchemaFactory.createForClass(Driver);
