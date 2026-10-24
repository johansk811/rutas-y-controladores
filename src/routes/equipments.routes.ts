import { Router } from 'express';
import { EquipmentsController } from '../controllers/equipments.controller';
import { validateCreateEquipmentPayload } from '../middlewares/validateEquipments.middleware';

const router = Router();
const controller = new EquipmentsController();

router.post('/', validateCreateEquipmentPayload, controller.createEquipment);
router.get('/', controller.getEquipments);
router.patch('/:id', controller.partialUpdateEquipment);

export default router;