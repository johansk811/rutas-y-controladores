import { Router } from 'express';
import loanroutes from './loan.routes';
import userroutes from './users.routes';
import envroutes from './environments.routes';
import equipmentroutes from './equipments.routes';

const routes = Router();

routes.use('/loans', loanroutes);
routes.use('/users', userroutes);
routes.use('/environments', envroutes);
routes.use('/equipments', equipmentroutes);


export default routes;