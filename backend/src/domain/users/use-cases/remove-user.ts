import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user-repositories';

@Injectable()
export class RemoverUser {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly userRepository: UserRepository) { }

  async execute(id: string): Promise<boolean> {
    return await this.userRepository.remove(id);
  }
}
