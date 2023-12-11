import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {Reponse, ReponseRelations} from '../models';

export class ReponseRepository extends DefaultCrudRepository<
  Reponse,
  typeof Reponse.prototype.id,
  ReponseRelations
> {
  constructor(
    @inject('datasources.mySql') dataSource: MySqlDataSource,
  ) {
    super(Reponse, dataSource);
  }
}
