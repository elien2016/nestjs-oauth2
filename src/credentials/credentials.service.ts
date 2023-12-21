import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Credential } from './credential.entity';

@Injectable()
export class CredentialsService {
  constructor(
    @InjectRepository(Credential)
    private credentialsRepository: Repository<Credential>,
  ) {}

  findAll(): Promise<Credential[]> {
    return this.credentialsRepository.find();
  }

  findOne(id: number): Promise<Credential | null> {
    return this.credentialsRepository.findOneBy({ id });
  }

  findByProviderAndProviderId(
    provider: string,
    providerId: string,
  ): Promise<Credential | null> {
    return this.credentialsRepository.findOneBy({ provider, providerId });
  }

  async remove(id: number): Promise<void> {
    await this.credentialsRepository.delete(id);
  }
}
