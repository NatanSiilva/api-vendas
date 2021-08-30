import { getCustomRepository } from 'typeorm';
import CustomersRepository from '../infra/typeorm/repositories/CustomersRepository';

class DeleteCustomerService {
  public async execute(id: string): Promise<void> {
    const customerRepository = getCustomRepository(CustomersRepository);

    const customer = await customerRepository.findById(id);

    if (!customer) {
      throw new Error('Customer not found');
    }

    await customerRepository.remove(customer);
  }
}

export default DeleteCustomerService;
