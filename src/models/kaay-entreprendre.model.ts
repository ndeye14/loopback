import {Entity, model, property} from '@loopback/repository';

@model()
export class KaayEntreprendre extends Entity {
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
  nom: string;

  @property({
    type: 'string',
    required: true,
  })
  prenom: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'boolean',
    required: true,
  })
  statut: boolean;

  @property({
    type: 'string',
    required: true,
  })
  nomEntreprise: string;

  @property({
    type: 'string',
    required: true,
  })
  statutJuridique: string;

  @property({
    type: 'string',
    required: true,
  })
  nineaOuRegistreCommerce: string;

  @property({
    type: 'string',
    required: true,
  })
  anneeExperience: string;

  @property({
    type: 'string',
    required: true,
  })
  secteurActivite: string;

  @property({
    type: 'string',
    required: true,
  })
  siteWeb: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  idPartageExperience: object[];

  @property({
   type: 'array',
    itemType: 'object',
    required: true,
  })
  idRole:object[];

  @property({
   type: 'array',
    itemType: 'object',
    required: true,
  })
  idDemandeAccompagnement:object[];

  @property({
   type: 'array',
    itemType: 'object',
    required: true,
  })
  idCommentaire:object[];


  constructor(data?: Partial<KaayEntreprendre>) {
    super(data);
  }
}

export interface KaayEntreprendreRelations {
  // describe navigational properties here
}

export type KaayEntreprendreWithRelations = KaayEntreprendre & KaayEntreprendreRelations;
