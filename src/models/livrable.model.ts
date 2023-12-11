import {Entity, model, property} from '@loopback/repository';

@model()
export class Livrable extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  livrable: string;


  constructor(data?: Partial<Livrable>) {
    super(data);
  }
}

export interface LivrableRelations {
  // describe navigational properties here
}

export type LivrableWithRelations = Livrable & LivrableRelations;
