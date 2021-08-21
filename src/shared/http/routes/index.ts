import { Request, Response, Router } from 'express';
import productRouter from '@modules/products/routes/products.routes';
import usersRouter from '@modules/users/routes/users.routes';
import sessionsRouter from '@modules/users/routes/sessions.routes';
import passwordRouter from '@modules/users/routes/password.routes';

const routes = Router();

routes.use('/products', productRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);

routes.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'Hello dev' });
});

export default routes;
