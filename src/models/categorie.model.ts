import {Entity, model, property} from '@loopback/repository';

@model()
export class Categorie extends Entity {
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
  categorie: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  idressources: object[];


  constructor(data?: Partial<Categorie>) {
    super(data);
  }
}

export interface CategorieRelations {
  // describe navigational properties here
}

export type CategorieWithRelations = Categorie & CategorieRelations;
