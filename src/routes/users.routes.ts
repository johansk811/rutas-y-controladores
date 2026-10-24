import { Router } from 'express';
import { UsersController } from '../controllers/users.controller';
import { validateCreateUserPayload } from '../middlewares/validateUsers.middlewares';

const router = Router();
const controller = new UsersController();

router.get('/',controller.getAllUsers);
router.post('/', validateCreateUserPayload, controller.createUser);
router.get('/:id', controller.getUserById);
router.patch('/:id', controller.partialUpdateUser);
router.patch('/:id/status', controller.softDeleteUser);

export default router;