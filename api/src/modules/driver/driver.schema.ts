import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Driver {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop([String])
  cars: string[];
}

export type DriverDocument = Driver & Document;
export const DriverSchema = SchemaFactory.createForClass(Driver);
