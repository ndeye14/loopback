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
import {PartageExperience} from '../models';
import {PartageExperienceRepository} from '../repositories';

export class PartageExperienceController {
  constructor(
    @repository(PartageExperienceRepository)
    public partageExperienceRepository : PartageExperienceRepository,
  ) {}

  @post('/partage-experiences')
  @response(200, {
    description: 'PartageExperience model instance',
    content: {'application/json': {schema: getModelSchemaRef(PartageExperience)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PartageExperience, {
            title: 'NewPartageExperience',
            exclude: ['id'],
          }),
        },
      },
    })
    partageExperience: Omit<PartageExperience, 'id'>,
  ): Promise<PartageExperience> {
    return this.partageExperienceRepository.create(partageExperience);
  }

  @get('/partage-experiences/count')
  @response(200, {
    description: 'PartageExperience model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PartageExperience) where?: Where<PartageExperience>,
  ): Promise<Count> {
    return this.partageExperienceRepository.count(where);
  }

  @get('/partage-experiences')
  @response(200, {
    description: 'Array of PartageExperience model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PartageExperience, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PartageExperience) filter?: Filter<PartageExperience>,
  ): Promise<PartageExperience[]> {
    return this.partageExperienceRepository.find(filter);
  }

  @patch('/partage-experiences')
  @response(200, {
    description: 'PartageExperience PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PartageExperience, {partial: true}),
        },
      },
    })
    partageExperience: PartageExperience,
    @param.where(PartageExperience) where?: Where<PartageExperience>,
  ): Promise<Count> {
    return this.partageExperienceRepository.updateAll(partageExperience, where);
  }

  @get('/partage-experiences/{id}')
  @response(200, {
    description: 'PartageExperience model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PartageExperience, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PartageExperience, {exclude: 'where'}) filter?: FilterExcludingWhere<PartageExperience>
  ): Promise<PartageExperience> {
    return this.partageExperienceRepository.findById(id, filter);
  }

  @patch('/partage-experiences/{id}')
  @response(204, {
    description: 'PartageExperience PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PartageExperience, {partial: true}),
        },
      },
    })
    partageExperience: PartageExperience,
  ): Promise<void> {
    await this.partageExperienceRepository.updateById(id, partageExperience);
  }

  @put('/partage-experiences/{id}')
  @response(204, {
    description: 'PartageExperience PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() partageExperience: PartageExperience,
  ): Promise<void> {
    await this.partageExperienceRepository.replaceById(id, partageExperience);
  }

  @del('/partage-experiences/{id}')
  @response(204, {
    description: 'PartageExperience DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.partageExperienceRepository.deleteById(id);
  }
}
