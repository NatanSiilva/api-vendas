import { getCustomRepository } from 'typeorm';
import User from '../infra/typeorm/entities/User';
import UsersRepository from '../infra/typeorm/repositories/UsersRepository';

class ShowProfileService {
  public async execute(user_id: string): Promise<User | undefined> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}

export default ShowProfileService;
