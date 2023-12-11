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
import {KaayEntreprendre} from '../models';
import {KaayEntreprendreRepository} from '../repositories';

export class KaayEntreprendreController {
  constructor(
    @repository(KaayEntreprendreRepository)
    public kaayEntreprendreRepository : KaayEntreprendreRepository,
  ) {}

  @post('/kaay-entreprendres')
  @response(200, {
    description: 'KaayEntreprendre model instance',
    content: {'application/json': {schema: getModelSchemaRef(KaayEntreprendre)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(KaayEntreprendre, {
            title: 'NewKaayEntreprendre',
            exclude: ['id'],
          }),
        },
      },
    })
    kaayEntreprendre: Omit<KaayEntreprendre, 'id'>,
  ): Promise<KaayEntreprendre> {
    return this.kaayEntreprendreRepository.create(kaayEntreprendre);
  }

  @get('/kaay-entreprendres/count')
  @response(200, {
    description: 'KaayEntreprendre model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(KaayEntreprendre) where?: Where<KaayEntreprendre>,
  ): Promise<Count> {
    return this.kaayEntreprendreRepository.count(where);
  }

  @get('/kaay-entreprendres')
  @response(200, {
    description: 'Array of KaayEntreprendre model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(KaayEntreprendre, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(KaayEntreprendre) filter?: Filter<KaayEntreprendre>,
  ): Promise<KaayEntreprendre[]> {
    return this.kaayEntreprendreRepository.find(filter);
  }

  @patch('/kaay-entreprendres')
  @response(200, {
    description: 'KaayEntreprendre PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(KaayEntreprendre, {partial: true}),
        },
      },
    })
    kaayEntreprendre: KaayEntreprendre,
    @param.where(KaayEntreprendre) where?: Where<KaayEntreprendre>,
  ): Promise<Count> {
    return this.kaayEntreprendreRepository.updateAll(kaayEntreprendre, where);
  }

  @get('/kaay-entreprendres/{id}')
  @response(200, {
    description: 'KaayEntreprendre model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(KaayEntreprendre, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(KaayEntreprendre, {exclude: 'where'}) filter?: FilterExcludingWhere<KaayEntreprendre>
  ): Promise<KaayEntreprendre> {
    return this.kaayEntreprendreRepository.findById(id, filter);
  }

  @patch('/kaay-entreprendres/{id}')
  @response(204, {
    description: 'KaayEntreprendre PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(KaayEntreprendre, {partial: true}),
        },
      },
    })
    kaayEntreprendre: KaayEntreprendre,
  ): Promise<void> {
    await this.kaayEntreprendreRepository.updateById(id, kaayEntreprendre);
  }

  @put('/kaay-entreprendres/{id}')
  @response(204, {
    description: 'KaayEntreprendre PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() kaayEntreprendre: KaayEntreprendre,
  ): Promise<void> {
    await this.kaayEntreprendreRepository.replaceById(id, kaayEntreprendre);
  }

  @del('/kaay-entreprendres/{id}')
  @response(204, {
    description: 'KaayEntreprendre DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.kaayEntreprendreRepository.deleteById(id);
  }
}
