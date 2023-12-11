import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {Ressources, RessourcesRelations} from '../models';

export class RessourcesRepository extends DefaultCrudRepository<
  Ressources,
  typeof Ressources.prototype.id,
  RessourcesRelations
> {
  constructor(
    @inject('datasources.mySql') dataSource: MySqlDataSource,
  ) {
    super(Ressources, dataSource);
  }
}
