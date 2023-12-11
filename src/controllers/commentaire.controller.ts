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
import {Commentaire} from '../models';
import {CommentaireRepository} from '../repositories';

export class CommentaireController {
  constructor(
    @repository(CommentaireRepository)
    public commentaireRepository : CommentaireRepository,
  ) {}

  @post('/commentaires')
  @response(200, {
    description: 'Commentaire model instance',
    content: {'application/json': {schema: getModelSchemaRef(Commentaire)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Commentaire, {
            title: 'NewCommentaire',
            exclude: ['id'],
          }),
        },
      },
    })
    commentaire: Omit<Commentaire, 'id'>,
  ): Promise<Commentaire> {
    return this.commentaireRepository.create(commentaire);
  }

  @get('/commentaires/count')
  @response(200, {
    description: 'Commentaire model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Commentaire) where?: Where<Commentaire>,
  ): Promise<Count> {
    return this.commentaireRepository.count(where);
  }

  @get('/commentaires')
  @response(200, {
    description: 'Array of Commentaire model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Commentaire, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Commentaire) filter?: Filter<Commentaire>,
  ): Promise<Commentaire[]> {
    return this.commentaireRepository.find(filter);
  }

  @patch('/commentaires')
  @response(200, {
    description: 'Commentaire PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Commentaire, {partial: true}),
        },
      },
    })
    commentaire: Commentaire,
    @param.where(Commentaire) where?: Where<Commentaire>,
  ): Promise<Count> {
    return this.commentaireRepository.updateAll(commentaire, where);
  }

  @get('/commentaires/{id}')
  @response(200, {
    description: 'Commentaire model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Commentaire, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Commentaire, {exclude: 'where'}) filter?: FilterExcludingWhere<Commentaire>
  ): Promise<Commentaire> {
    return this.commentaireRepository.findById(id, filter);
  }

  @patch('/commentaires/{id}')
  @response(204, {
    description: 'Commentaire PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Commentaire, {partial: true}),
        },
      },
    })
    commentaire: Commentaire,
  ): Promise<void> {
    await this.commentaireRepository.updateById(id, commentaire);
  }

  @put('/commentaires/{id}')
  @response(204, {
    description: 'Commentaire PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() commentaire: Commentaire,
  ): Promise<void> {
    await this.commentaireRepository.replaceById(id, commentaire);
  }

  @del('/commentaires/{id}')
  @response(204, {
    description: 'Commentaire DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.commentaireRepository.deleteById(id);
  }
}
