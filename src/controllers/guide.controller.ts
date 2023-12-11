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
import {Guide} from '../models';
import {GuideRepository} from '../repositories';

export class GuideController {
  constructor(
    @repository(GuideRepository)
    public guideRepository : GuideRepository,
  ) {}

  @post('/guides')
  @response(200, {
    description: 'Guide model instance',
    content: {'application/json': {schema: getModelSchemaRef(Guide)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Guide, {
            title: 'NewGuide',
            exclude: ['id'],
          }),
        },
      },
    })
    guide: Omit<Guide, 'id'>,
  ): Promise<Guide> {
    return this.guideRepository.create(guide);
  }

  @get('/guides/count')
  @response(200, {
    description: 'Guide model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Guide) where?: Where<Guide>,
  ): Promise<Count> {
    return this.guideRepository.count(where);
  }

  @get('/guides')
  @response(200, {
    description: 'Array of Guide model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Guide, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Guide) filter?: Filter<Guide>,
  ): Promise<Guide[]> {
    return this.guideRepository.find(filter);
  }

  @patch('/guides')
  @response(200, {
    description: 'Guide PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Guide, {partial: true}),
        },
      },
    })
    guide: Guide,
    @param.where(Guide) where?: Where<Guide>,
  ): Promise<Count> {
    return this.guideRepository.updateAll(guide, where);
  }

  @get('/guides/{id}')
  @response(200, {
    description: 'Guide model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Guide, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Guide, {exclude: 'where'}) filter?: FilterExcludingWhere<Guide>
  ): Promise<Guide> {
    return this.guideRepository.findById(id, filter);
  }

  @patch('/guides/{id}')
  @response(204, {
    description: 'Guide PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Guide, {partial: true}),
        },
      },
    })
    guide: Guide,
  ): Promise<void> {
    await this.guideRepository.updateById(id, guide);
  }

  @put('/guides/{id}')
  @response(204, {
    description: 'Guide PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() guide: Guide,
  ): Promise<void> {
    await this.guideRepository.replaceById(id, guide);
  }

  @del('/guides/{id}')
  @response(204, {
    description: 'Guide DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.guideRepository.deleteById(id);
  }
}
