import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {DemandeAccompagnement} from '../models';
import {DemandeAccompagnementRepository} from '../repositories';

export class DemandeAccompagnementController {
  constructor(
    @repository(DemandeAccompagnementRepository)
    public demandeAccompagnementRepository : DemandeAccompagnementRepository,
  ) {}

  @post('/demande-accompagnements')
  @response(200, {
    description: 'DemandeAccompagnement model instance',
    content: {'application/json': {schema: getModelSchemaRef(DemandeAccompagnement)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DemandeAccompagnement, {
            title: 'NewDemandeAccompagnement',
            exclude: ['id'],
          }),
        },
      },
    })
    demandeAccompagnement: Omit<DemandeAccompagnement, 'id'>,
  ): Promise<DemandeAccompagnement> {
    return this.demandeAccompagnementRepository.create(demandeAccompagnement);
  }

  @get('/demande-accompagnements/count')
  @response(200, {
    description: 'DemandeAccompagnement model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(DemandeAccompagnement) where?: Where<DemandeAccompagnement>,
  ): Promise<Count> {
    return this.demandeAccompagnementRepository.count(where);
  }

  @get('/demande-accompagnements')
  @response(200, {
    description: 'Array of DemandeAccompagnement model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(DemandeAccompagnement, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(DemandeAccompagnement) filter?: Filter<DemandeAccompagnement>,
  ): Promise<DemandeAccompagnement[]> {
    return this.demandeAccompagnementRepository.find(filter);
  }

  @patch('/demande-accompagnements')
  @response(200, {
    description: 'DemandeAccompagnement PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DemandeAccompagnement, {partial: true}),
        },
      },
    })
    demandeAccompagnement: DemandeAccompagnement,
    @param.where(DemandeAccompagnement) where?: Where<DemandeAccompagnement>,
  ): Promise<Count> {
    return this.demandeAccompagnementRepository.updateAll(demandeAccompagnement, where);
  }

  @get('/demande-accompagnements/{id}')
  @response(200, {
    description: 'DemandeAccompagnement model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(DemandeAccompagnement, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(DemandeAccompagnement, {exclude: 'where'}) filter?: FilterExcludingWhere<DemandeAccompagnement>
  ): Promise<DemandeAccompagnement> {
    return this.demandeAccompagnementRepository.findById(id, filter);
  }

  @patch('/demande-accompagnements/{id}')
  @response(204, {
    description: 'DemandeAccompagnement PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DemandeAccompagnement, {partial: true}),
        },
      },
    })
    demandeAccompagnement: DemandeAccompagnement,
  ): Promise<void> {
    await this.demandeAccompagnementRepository.updateById(id, demandeAccompagnement);
  }

  @put('/demande-accompagnements/{id}')
  @response(204, {
    description: 'DemandeAccompagnement PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() demandeAccompagnement: DemandeAccompagnement,
  ): Promise<void> {
    await this.demandeAccompagnementRepository.replaceById(id, demandeAccompagnement);
  }

  @del('/demande-accompagnements/{id}')
  @response(204, {
    description: 'DemandeAccompagnement DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.demandeAccompagnementRepository.deleteById(id);
  }
}
