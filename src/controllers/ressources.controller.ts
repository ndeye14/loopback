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
import {Ressources} from '../models';
import {RessourcesRepository} from '../repositories';

export class RessourcesController {
  constructor(
    @repository(RessourcesRepository)
    public ressourcesRepository : RessourcesRepository,
  ) {}

  @post('/ressources')
  @response(200, {
    description: 'Ressources model instance',
    content: {'application/json': {schema: getModelSchemaRef(Ressources)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ressources, {
            title: 'NewRessources',
            exclude: ['id'],
          }),
        },
      },
    })
    ressources: Omit<Ressources, 'id'>,
  ): Promise<Ressources> {
    return this.ressourcesRepository.create(ressources);
  }

  @get('/ressources/count')
  @response(200, {
    description: 'Ressources model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Ressources) where?: Where<Ressources>,
  ): Promise<Count> {
    return this.ressourcesRepository.count(where);
  }

  @get('/ressources')
  @response(200, {
    description: 'Array of Ressources model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Ressources, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Ressources) filter?: Filter<Ressources>,
  ): Promise<Ressources[]> {
    return this.ressourcesRepository.find(filter);
  }

  @patch('/ressources')
  @response(200, {
    description: 'Ressources PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ressources, {partial: true}),
        },
      },
    })
    ressources: Ressources,
    @param.where(Ressources) where?: Where<Ressources>,
  ): Promise<Count> {
    return this.ressourcesRepository.updateAll(ressources, where);
  }

  @get('/ressources/{id}')
  @response(200, {
    description: 'Ressources model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Ressources, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Ressources, {exclude: 'where'}) filter?: FilterExcludingWhere<Ressources>
  ): Promise<Ressources> {
    return this.ressourcesRepository.findById(id, filter);
  }

  @patch('/ressources/{id}')
  @response(204, {
    description: 'Ressources PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ressources, {partial: true}),
        },
      },
    })
    ressources: Ressources,
  ): Promise<void> {
    await this.ressourcesRepository.updateById(id, ressources);
  }

  @put('/ressources/{id}')
  @response(204, {
    description: 'Ressources PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ressources: Ressources,
  ): Promise<void> {
    await this.ressourcesRepository.replaceById(id, ressources);
  }

  @del('/ressources/{id}')
  @response(204, {
    description: 'Ressources DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ressourcesRepository.deleteById(id);
  }
}
