import { Router } from 'express';

import ForgoPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';

const passwordRouter = Router();
const forgoPasswordController = new ForgoPasswordController();
const resetPasswordController = new ResetPasswordController();

passwordRouter.post('/forgot', forgoPasswordController.create);
passwordRouter.post('/reset', resetPasswordController.create);

export default passwordRouter;
