import { Router } from 'express';
import { EnvironmentsController } from '../controllers/Environments.controller';
import { validateCreateEnvironmentPayload } from '../middlewares/environments.middlewares';

const router = Router();
const controller = new EnvironmentsController();

router.get('/', controller.getAllEnvironments);
router.post('/', validateCreateEnvironmentPayload, controller.createEnvironment);
router.patch('/:id', controller.partialUpdateEnvironment);

export default router;