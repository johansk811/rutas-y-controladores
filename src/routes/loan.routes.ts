import { Router } from 'express';
import { LoanController } from '../controllers/loan.controllers';
import { validateLoanPayload } from '../middlewares/validateLoan.middleware';

const router = Router();

// Define your loan routes here

router.get('/', LoanController.createLoan);
router.get('/search', LoanController.getLoansByFilter);
router.get('/:id', LoanController.getLoanById);
router.put('/:id/accept', LoanController.acceptLoanInventory);
router.post('/', validateLoanPayload, LoanController.createLoan);

export default router;