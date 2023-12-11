import {Entity, model, property} from '@loopback/repository';

@model()
export class Reponse extends Entity {
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
  message: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  idCommentaire: object[];


  constructor(data?: Partial<Reponse>) {
    super(data);
  }
}

export interface ReponseRelations {
  // describe navigational properties here
}

export type ReponseWithRelations = Reponse & ReponseRelations;
