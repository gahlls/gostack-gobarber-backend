import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';

const provideresRouter = Router();
const providersController = new ProvidersController();

provideresRouter.use(ensureAuthenticated);

provideresRouter.get('/', providersController.index);

export default provideresRouter;
