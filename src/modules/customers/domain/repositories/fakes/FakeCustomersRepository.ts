import { ICreateCustomer } from '@modules/customers/domain/models/ICreateCustomer';
import { ICustomerPaginate } from '@modules/customers/domain/models/ICustomerPaginate';
import { ICustomersRepository } from '@modules/customers/domain/repositories/ICustomersRepository';

import Customer from '../entities/Customer';

class CustomersRepository implements ICustomersRepository {
  private ormRepository: Repository<Customer>;

  constructor() {
    this.ormRepository = getRepository(Customer);
  }

  public async create({ name, email }: ICreateCustomer): Promise<Customer> {}

  // public async save(customer: Customer): Promise<Customer> {}

  // public async remove(customer: Customer): Promise<void> {}

  // public async findAll(): Promise<Customer[] | undefined> {}

  // public async findAllPaginate(): Promise<ICustomerPaginate> {}

  // public async findByName(name: string): Promise<Customer | undefined> {}

  // public async findById(id: string): Promise<Customer | undefined> {}

  // public async findByEmail(email: string): Promise<Customer | undefined> {}
}

export default CustomersRepository;
