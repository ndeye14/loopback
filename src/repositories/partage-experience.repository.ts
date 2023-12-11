import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {PartageExperience, PartageExperienceRelations} from '../models';

export class PartageExperienceRepository extends DefaultCrudRepository<
  PartageExperience,
  typeof PartageExperience.prototype.id,
  PartageExperienceRelations
> {
  constructor(
    @inject('datasources.mySql') dataSource: MySqlDataSource,
  ) {
    super(PartageExperience, dataSource);
  }
}
