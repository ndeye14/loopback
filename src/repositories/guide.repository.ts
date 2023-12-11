import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {Guide, GuideRelations} from '../models';

export class GuideRepository extends DefaultCrudRepository<
  Guide,
  typeof Guide.prototype.id,
  GuideRelations
> {
  constructor(
    @inject('datasources.mySql') dataSource: MySqlDataSource,
  ) {
    super(Guide, dataSource);
  }
}
