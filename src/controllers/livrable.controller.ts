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
import {Livrable} from '../models';
import {LivrableRepository} from '../repositories';

export class LivrableController {
  constructor(
    @repository(LivrableRepository)
    public livrableRepository : LivrableRepository,
  ) {}

  @post('/livrables')
  @response(200, {
    description: 'Livrable model instance',
    content: {'application/json': {schema: getModelSchemaRef(Livrable)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Livrable, {
            title: 'NewLivrable',
            exclude: ['id'],
          }),
        },
      },
    })
    livrable: Omit<Livrable, 'id'>,
  ): Promise<Livrable> {
    return this.livrableRepository.create(livrable);
  }

  @get('/livrables/count')
  @response(200, {
    description: 'Livrable model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Livrable) where?: Where<Livrable>,
  ): Promise<Count> {
    return this.livrableRepository.count(where);
  }

  @get('/livrables')
  @response(200, {
    description: 'Array of Livrable model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Livrable, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Livrable) filter?: Filter<Livrable>,
  ): Promise<Livrable[]> {
    return this.livrableRepository.find(filter);
  }

  @patch('/livrables')
  @response(200, {
    description: 'Livrable PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Livrable, {partial: true}),
        },
      },
    })
    livrable: Livrable,
    @param.where(Livrable) where?: Where<Livrable>,
  ): Promise<Count> {
    return this.livrableRepository.updateAll(livrable, where);
  }

  @get('/livrables/{id}')
  @response(200, {
    description: 'Livrable model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Livrable, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Livrable, {exclude: 'where'}) filter?: FilterExcludingWhere<Livrable>
  ): Promise<Livrable> {
    return this.livrableRepository.findById(id, filter);
  }

  @patch('/livrables/{id}')
  @response(204, {
    description: 'Livrable PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Livrable, {partial: true}),
        },
      },
    })
    livrable: Livrable,
  ): Promise<void> {
    await this.livrableRepository.updateById(id, livrable);
  }

  @put('/livrables/{id}')
  @response(204, {
    description: 'Livrable PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() livrable: Livrable,
  ): Promise<void> {
    await this.livrableRepository.replaceById(id, livrable);
  }

  @del('/livrables/{id}')
  @response(204, {
    description: 'Livrable DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.livrableRepository.deleteById(id);
  }
}
