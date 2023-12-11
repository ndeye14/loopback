import {Entity, model, property} from '@loopback/repository';

@model()
export class PartageExperience extends Entity {
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
  secteurActivite: string;

  @property({
    type: 'string',
    required: true,
  })
  titre: string;

  @property({
    type: 'string',
    required: true,
  })
  contenu: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  idCommentaire: object[];


  constructor(data?: Partial<PartageExperience>) {
    super(data);
  }
}

export interface PartageExperienceRelations {
  // describe navigational properties here
}

export type PartageExperienceWithRelations = PartageExperience & PartageExperienceRelations;
