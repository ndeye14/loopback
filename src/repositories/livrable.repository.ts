import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {Livrable, LivrableRelations} from '../models';

export class LivrableRepository extends DefaultCrudRepository<
  Livrable,
  typeof Livrable.prototype.id,
  LivrableRelations
> {
  constructor(
    @inject('datasources.mySql') dataSource: MySqlDataSource,
  ) {
    super(Livrable, dataSource);
  }
}
