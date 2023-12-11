import {Entity, model, property} from '@loopback/repository';

@model()
export class Ressources extends Entity {
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
  objectif: string;

  @property({
    type: 'string',
    required: true,
  })
  consigne: string;

  @property({
    type: 'boolean',
    required: true,
  })
  etat: boolean;


  constructor(data?: Partial<Ressources>) {
    super(data);
  }
}

export interface RessourcesRelations {
  // describe navigational properties here
}

export type RessourcesWithRelations = Ressources & RessourcesRelations;
