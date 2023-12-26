import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
@Index(['provider', 'providerId'], { unique: true })
export class Credential {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  provider: string;

  @Column()
  providerId: string;

  @Column()
  accessToken: string;

  @Column()
  refreshToken: string;
}
