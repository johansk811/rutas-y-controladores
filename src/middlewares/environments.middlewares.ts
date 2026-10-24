import { Request, Response, NextFunction } from 'express';
import {ICreateEnvironmentDTO} from '../dtos/environments.dto';

export const isCreateEnvironmentDTO = (value: unknown): value is ICreateEnvironmentDTO => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return false;

  const env = value as Record<string, unknown>;

  return (
    typeof env.nombreAmbiente === 'string' && env.nombreAmbiente.trim() !== '' &&
    typeof env.capacidad === 'number' && Number.isInteger(env.capacidad) && env.capacidad > 0 &&
    typeof env.ubicacion === 'string' && env.ubicacion.trim() !== ''
  );
};
export const validateCreateEnvironmentPayload = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const body: unknown = req.body;
    if (!isCreateEnvironmentDTO(body)) {
        res.status(400).json({
            success: false,
            error: 'Datos del entorno inválidos.'
        });
        return;
    }
    next();
}; 