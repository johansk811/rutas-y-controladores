import { Request, Response } from 'express';

export class EquipmentsController {
  public createEquipment(req: Request, res: Response): void {
    const { environmentId } = req.body; // Vinculado a un ambiente
    res.status(501).json({ message: `Equipo no implementado ${environmentId}` });
  }

  public getEquipments(req: Request, res: Response): void {
    const { environmentId } = req.query; // Filtro opcional por query string ?environmentId=...
    if (environmentId) {
      res.status(501).json({ message: `Equipos filtrados por el ambiente: ${environmentId}` });
    } else {
      res.status(501).json({ message: "Listado de todos los equipos existentes no implementado" });
    }
  }

  public partialUpdateEquipment(req: Request, res: Response): void {
    const { id } = req.params;
    // ej. marcar como "en mantenimiento" o cambiar ubicación
    res.status(501).json({ message: `Equipo ${id} no implementado` });
  }
}