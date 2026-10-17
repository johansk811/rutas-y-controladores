import { Router } from 'express';
import { LoanController } from '../controllers/loan.controllers';

const router = Router();

// Define your loan routes here

router.get('/', LoanController.createLoan);
router.get('/search', LoanController.getLoansByFilter);
router.get('/:id', LoanController.getLoanById);
router.put('/:id/accept', LoanController.acceptLoanInventory);

export default router;