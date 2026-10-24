import express, { Request, Response } from 'express';
import cors from 'cors';
import apiRoutes from './routes';
import { requestLogger } from './middlewares/logger.middleware';
import { globalErrorHandler } from './middlewares/errorHandler.middleware';

const app = express();

app.use(cors())
app.use(requestLogger);
app.use(globalErrorHandler);

app.use('/api/v1', apiRoutes);

// Health Check Endpoint
app.get('/api/v1/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'ControlLabs API operando correctamente',
    timestamp: new Date().toISOString()
  });
});

app.use(express.json());

app.use((_req, res) => {
   res.status(404).json({ success: false, error: 'Ruta no encontrada.' });
});

app.use(globalErrorHandler);



export default app;