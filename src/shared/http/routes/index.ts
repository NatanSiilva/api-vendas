import { Request, Response, Router } from 'express';
import productRouter from '@modules/products/routes/products.routes';
import usersRouter from '@modules/users/routes/users.routes';

const routes = Router();

routes.use('/products', productRouter);
routes.use('/users', usersRouter);

routes.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'Hello dev' });
});

export default routes;
