import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';
import redisCache from '@shared/cache/RedisCache';

class DeleteProductService {
  public async execute(id: string): Promise<void> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found');
    }

    await redisCache.invalidate('api-venda-PRODUCT_LIST');

    await productsRepository.remove(product);
  }
}

export default DeleteProductService;
