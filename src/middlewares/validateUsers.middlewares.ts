import { Request, Response, NextFunction } from 'express';
import {ICreateUserDTO} from '../dtos/users.dto';


export const isCreateUserDTO = (value: unknown): value is ICreateUserDTO => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return false;
  
  const user = value as Record<string, unknown>;
  const perfilesValidos = ['estudiante', 'docente', 'administrador'];

  return (
    typeof user.nombre === 'string' && user.nombre.trim() !== '' &&
    typeof user.correo === 'string' && user.correo.trim() !== '' &&
    typeof user.contrasena === 'string' && user.contrasena.length >= 6 &&
    typeof user.perfil === 'string' && perfilesValidos.includes(user.perfil)
  );
};
export const validateCreateUserPayload = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const body: unknown = req.body;
    if (!isCreateUserDTO(body)) {
        res.status(400).json({
            success: false,
            error: 'Datos del usuario inválidos.'
        });
        return;
    }
    next();
}; 