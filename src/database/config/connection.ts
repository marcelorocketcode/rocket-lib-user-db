import { DataSource } from 'typeorm';

import logger from '@utils/logger';

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.CENTRAL_DATABASE_URL as string,
  logging: false,
  synchronize: false,
  migrationsRun: false,
  migrationsTableName: 'migrations',
  entities: ["./src/database/models/**/*.ts"],
  migrations: ["./src/migrations/*{.ts,.js}"],
})

export function connection() {
  const URI = process.env.CENTRAL_DATABASE_URL;

  if (!URI) {
    const message = "Invalid configuration to connect central database, CENTRAL_DATABASE_URL env is missing"

    logger.error(message);
    throw new Error(message);
  }

  return AppDataSource;
}