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
import {Reponse} from '../models';
import {ReponseRepository} from '../repositories';

export class ResponseController {
  constructor(
    @repository(ReponseRepository)
    public reponseRepository : ReponseRepository,
  ) {}

  @post('/reponses')
  @response(200, {
    description: 'Reponse model instance',
    content: {'application/json': {schema: getModelSchemaRef(Reponse)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reponse, {
            title: 'NewReponse',
            exclude: ['id'],
          }),
        },
      },
    })
    reponse: Omit<Reponse, 'id'>,
  ): Promise<Reponse> {
    return this.reponseRepository.create(reponse);
  }

  @get('/reponses/count')
  @response(200, {
    description: 'Reponse model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Reponse) where?: Where<Reponse>,
  ): Promise<Count> {
    return this.reponseRepository.count(where);
  }

  @get('/reponses')
  @response(200, {
    description: 'Array of Reponse model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Reponse, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Reponse) filter?: Filter<Reponse>,
  ): Promise<Reponse[]> {
    return this.reponseRepository.find(filter);
  }

  @patch('/reponses')
  @response(200, {
    description: 'Reponse PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reponse, {partial: true}),
        },
      },
    })
    reponse: Reponse,
    @param.where(Reponse) where?: Where<Reponse>,
  ): Promise<Count> {
    return this.reponseRepository.updateAll(reponse, where);
  }

  @get('/reponses/{id}')
  @response(200, {
    description: 'Reponse model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Reponse, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Reponse, {exclude: 'where'}) filter?: FilterExcludingWhere<Reponse>
  ): Promise<Reponse> {
    return this.reponseRepository.findById(id, filter);
  }

  @patch('/reponses/{id}')
  @response(204, {
    description: 'Reponse PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reponse, {partial: true}),
        },
      },
    })
    reponse: Reponse,
  ): Promise<void> {
    await this.reponseRepository.updateById(id, reponse);
  }

  @put('/reponses/{id}')
  @response(204, {
    description: 'Reponse PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() reponse: Reponse,
  ): Promise<void> {
    await this.reponseRepository.replaceById(id, reponse);
  }

  @del('/reponses/{id}')
  @response(204, {
    description: 'Reponse DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.reponseRepository.deleteById(id);
  }
}
