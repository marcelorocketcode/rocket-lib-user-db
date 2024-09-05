import { User as UserEntity } from '@database/models/user.model'

export interface CreateUserPayload {
  name: string;
  email: string;
  password: string;
}

export type User = Omit<UserEntity, 'password'>;