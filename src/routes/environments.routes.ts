import { Router } from 'express';
import { EnvironmentsController } from '../controllers/Environments.controller';

const router = Router();
const controller = new EnvironmentsController();

router.get('/', controller.getAllEnvironments);
router.post('/', controller.createEnvironment);
router.patch('/:id', controller.partialUpdateEnvironment);

export default router;