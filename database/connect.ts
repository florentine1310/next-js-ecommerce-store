import 'server-only';
import { config } from 'dotenv-safe';
import postgres, { type sql } from 'postgres';

config();

declare namespace globalThis {
  let postgresSqlClient: Sql;
}

function connectOneTimeToDatabase() {
  if (!('postgresSqlClient' in globalThis)) {
    globalThis.postgresSqlClient = postgres({
      transform: {
        ...postgres.camel,
        undefined: null,
      },
    });
  }

  return globalThis.postgresSqlClient;
}
export const sql = connectOneTimeToDatabase();
