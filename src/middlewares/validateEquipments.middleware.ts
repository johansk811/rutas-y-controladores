import { Request, Response, NextFunction } from 'express';
import {ICreateEquipmentDTO} from '../dtos/equipments.dto';

export const isCreateEquipmentDTO = (value: unknown): value is ICreateEquipmentDTO => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return false;

  const eq = value as Record<string, unknown>;

  return (
    typeof eq.serial === 'string' && eq.serial.trim() !== '' &&
    typeof eq.tipoEquipo === 'string' && eq.tipoEquipo.trim() !== '' &&
    typeof eq.marca === 'string' && eq.marca.trim() !== '' &&
    typeof eq.ambienteId === 'string' && eq.ambienteId.trim() !== ''
  );
};
export const validateCreateEquipmentPayload = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const body: unknown = req.body;
    if (!isCreateEquipmentDTO(body)) {
        res.status(400).json({
            success: false,
            error: 'Datos del equipo inválidos.'
        });
        return;
    }
    next();
}; 