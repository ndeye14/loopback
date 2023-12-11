import {Entity, model, property} from '@loopback/repository';

@model()
export class Guide extends Entity {
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
  titre: string;

  @property({
    type: 'string',
    required: true,
  })
  descrition: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  idRessources: object[];


  constructor(data?: Partial<Guide>) {
    super(data);
  }
}

export interface GuideRelations {
  // describe navigational properties here
}

export type GuideWithRelations = Guide & GuideRelations;
