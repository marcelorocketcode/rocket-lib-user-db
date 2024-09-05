import 'dotenv/config';

import logger from '@utils/logger';
import { setUpPackague } from './setup';

// Importing services related with repositories
import { UserService } from '@modules/user/user.service';

// Initializing configurations and connections
const main = async () => {
  logger.info('Initializing private custom package.')
  await setUpPackague();
}

main();

export default {
  UserService,
}