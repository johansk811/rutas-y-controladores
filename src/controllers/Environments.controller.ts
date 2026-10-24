import { Request, Response } from 'express';

export class EnvironmentsController {
  public getAllEnvironments(req: Request, res: Response): void {
    res.status(501).json({ message: "Listado no implementado" });
  }

  public createEnvironment(req: Request, res: Response): void {
    const { capacity, location } = req.body;
    res.status(501).json({ message: "Ambiente creado no implementado" });
  }

  public partialUpdateEnvironment(req: Request, res: Response): void {
    const { id } = req.params;
    // ej. cambiar solo capacidad o estado operativo
    res.status(501).json({ message: `Ambiente ${id} modificado no implementado` });
  }
}