import logger from '@utils/logger';

import { connection as userDatabaseConnection } from '@database/config/connection';

export const setUpPackague = async () => {
  return userDatabaseConnection().initialize().then(() => {
    logger.info('Connection to central database successful');
  }).catch((error) => {
    logger.error('Connection to central database fail', error);
  });
};
