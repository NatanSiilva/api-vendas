import { Request, Response } from 'express';
import CreateCustomerService from '../../../services/CreateCustomerService';
import DeleteCustomerService from '../../../services/DeleteCustomerService';
import ListCustomerService from '../../../services/ListCustomerService';
import ShowCustomerService from '../../../services/ShowCustomerService';
import UpdateCustomerService from '../../../services/UpdateCustomerService';
import CustomersRepository from '../../typeorm/repositories/CustomersRepository';

export default class CustomerController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listCustomer = new ListCustomerService();

    const customer = await listCustomer.execute();

    return res.json(customer);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showCustomer = new ShowCustomerService();

    const customer = await showCustomer.execute(id);

    return res.json(customer);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email } = req.body;

    const customersRepository = new CustomersRepository();

    const createCustomer = new CreateCustomerService(customersRepository);

    const customer = await createCustomer.execute({
      name,
      email,
    });

    return res.json(customer);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { name, email } = req.body;

    const { id } = req.params;

    const updateCustomer = new UpdateCustomerService();

    const customer = await updateCustomer.execute({
      id,
      name,
      email,
    });

    return res.json(customer);
  }

  public async destroy(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const destroyCustomer = new DeleteCustomerService();

    await destroyCustomer.execute(id);

    return res.json([]);
  }
}
