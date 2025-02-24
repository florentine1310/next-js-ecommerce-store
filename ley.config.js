import { config } from 'dotenv-safe';
import { postgresConfig } from './util/config.ts';

config();

export default postgresConfig;
