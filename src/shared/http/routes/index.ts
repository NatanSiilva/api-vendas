import { Request, Response, Router } from 'express';
import productRouter from '@modules/products/routes/products.routes';

const routes = Router();

routes.use('/products', productRouter);

routes.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'Hello dev' });
});

export default routes;
