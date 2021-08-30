import { ICustomersRepository } from '../domain/repositories/ICustomersRepository';
import { ICreateCustomer } from '../domain/models/ICreateCustomer';
import { ICustomer } from '../domain/models/ICustomer';
import AppError from '@shared/errors/AppError';

class CreateCustomerService {
  constructor(private customersRepository: ICustomersRepository) {
    this.customersRepository = customersRepository;
  }

  public async execute({ email, name }: ICreateCustomer): Promise<ICustomer> {
    const emailExists = await this.customersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used.');
    }

    const customer = this.customersRepository.create({
      name,
      email,
    });

    return customer;
  }
}

export default CreateCustomerService;
