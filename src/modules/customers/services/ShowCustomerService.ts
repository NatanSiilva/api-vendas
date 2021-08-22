import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customer';
import CustomersRepository from '../typeorm/repositories/CustomersRepository';

class ShowCustomerService {
  public async execute(id: string): Promise<Customer | undefined> {
    const customerRepository = getCustomRepository(CustomersRepository);

    const customer = await customerRepository.findById(id);

    if (!customer) {
      throw new Error('Customer not found');
    }

    return customer;
  }
}

export default ShowCustomerService;
