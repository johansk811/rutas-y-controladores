import { Router } from 'express';
import { EquipmentsController } from '../controllers/equipments.controller';

const router = Router();
const controller = new EquipmentsController();

router.post('/', controller.createEquipment);
router.get('/', controller.getEquipments);
router.patch('/:id', controller.partialUpdateEquipment);

export default router;