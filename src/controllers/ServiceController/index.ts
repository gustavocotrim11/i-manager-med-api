import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Service from '../../database/entity/Service';

class ServiceController {
  async set(req: Request, res: Response) {
    try {
      const data = req.body;

      const service = new Service();

      Object.assign(service, data);

      await service.save();

      return res.status(200).end();
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error.message,
      });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const serviceRepository = getRepository(Service);

      const { date } = req.query;

      const clients = await serviceRepository
        .createQueryBuilder('service')
        .select([
          'service.id',
          'service.scheduleDate',
          'service.serviceDate',
        ])
        .innerJoin('service.client', 'client')
        .addSelect([
          'client.id',
          'client.name',
          'client.cpf',
          'client.cellphone',
          'client.phone',
        ])
        .innerJoin('service.specialist', 'specialist')
        .addSelect([
          'specialist.id',
          'specialist.name',
        ])
        .innerJoin('specialist.specialties', 'specialties')
        .addSelect(['specialties.text'])
        .where(`to_char(service.scheduleDate, 'dd/mm/yyyy') like '%${date}%'`)
        .getMany();

      if (clients.length === 0) {
        return res.status(200).json([]);
      }

      return res.status(200).json(clients);
    } catch (error) {
      console.log(error);

      return res.status(400).json({ error: true, message: error.message });
    }
  }
}

export { ServiceController };
