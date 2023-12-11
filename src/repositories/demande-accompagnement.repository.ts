import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {DemandeAccompagnement, DemandeAccompagnementRelations} from '../models';

export class DemandeAccompagnementRepository extends DefaultCrudRepository<
  DemandeAccompagnement,
  typeof DemandeAccompagnement.prototype.id,
  DemandeAccompagnementRelations
> {
  constructor(
    @inject('datasources.mySql') dataSource: MySqlDataSource,
  ) {
    super(DemandeAccompagnement, dataSource);
  }
}
