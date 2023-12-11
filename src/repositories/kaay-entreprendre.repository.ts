import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {KaayEntreprendre, KaayEntreprendreRelations} from '../models';

export class KaayEntreprendreRepository extends DefaultCrudRepository<
  KaayEntreprendre,
  typeof KaayEntreprendre.prototype.id,
  KaayEntreprendreRelations
> {
  constructor(
    @inject('datasources.mySql') dataSource: MySqlDataSource,
  ) {
    super(KaayEntreprendre, dataSource);
  }
}
