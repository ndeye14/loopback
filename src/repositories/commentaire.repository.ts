import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {Commentaire, CommentaireRelations} from '../models';

export class CommentaireRepository extends DefaultCrudRepository<
  Commentaire,
  typeof Commentaire.prototype.id,
  CommentaireRelations
> {
  constructor(
    @inject('datasources.mySql') dataSource: MySqlDataSource,
  ) {
    super(Commentaire, dataSource);
  }
}
