import {Entity, model, property} from '@loopback/repository';

@model()
export class Commentaire extends Entity {
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
  commentaire: string;

  "relations": {
    "kaayEntreprendre": {
      "type": "belongsTo",
      "model": "kaayEntreprendre",
      "foreignKey": "kaayEntreprendreId"
    }
  }


  constructor(data?: Partial<Commentaire>) {
    super(data);
  }
}

export interface CommentaireRelations {
  // describe navigational properties here
}

export type CommentaireWithRelations = Commentaire & CommentaireRelations;
