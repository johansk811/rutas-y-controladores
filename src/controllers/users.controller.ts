import { Request, Response } from 'express';

export class UsersController {
  public getAllUsers(req: Request, res: Response): void {
    res.status(501).json({ message: "Listado no existente" });
  }

  public createUser(req: Request, res: Response): void {
    const { profile } = req.body; // estudiante, docente, administrador
    res.status(501).json({ message: `Usuario con perfil ${profile} no existente` });
  }

  public getUserById(req: Request, res: Response): void {
    const { id } = req.params;
    res.status(501).json({ message: `Detalles del usuario ${id}` });
  }

  public partialUpdateUser(req: Request, res: Response): void {
    const { id } = req.params;
    // Modificaciones parciales: rol, estado de cuenta o contraseña
    res.status(501).json({ message: `Usuario ${id} actualizado parcialmente ` });
  }

  public softDeleteUser(req: Request, res: Response): void {
    const { id } = req.params;
    res.status(501).json({ message: `Usuario ${id} eliminado lógicamente` });
  }
}
