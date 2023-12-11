import {Entity, model, property} from '@loopback/repository';

@model()
export class DemandeAccompagnement extends Entity {
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
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  objectif: string;

  @property({
    type: 'boolean',
    required: true,
  })
  etat: boolean;


  constructor(data?: Partial<DemandeAccompagnement>) {
    super(data);
  }
}

export interface DemandeAccompagnementRelations {
  // describe navigational properties here
}

export type DemandeAccompagnementWithRelations = DemandeAccompagnement & DemandeAccompagnementRelations;
