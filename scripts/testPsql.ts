import dotenv from "dotenv";
dotenv.config();

import { Client } from "pg";
import "../common";

export const testPsql = (): Promise<void> =>
  new Promise((resolve, reject) => {
    type Result = { table_schema: string; table_name: string };

    const client = new Client({
      connectionString: process.env.PG_HEROKU,
      ssl: {
        rejectUnauthorized: false,
      },
    });

    client
      .connect()
      .then(() =>
        client.query<Result>(
          "SELECT table_schema, table_name FROM information_schema.tables;",
          (err, res) => {
            client.end();

            if (err) return reject(err);
            const grouped = res.rows.groupBy("table_schema");
            const mapped = grouped.map<{ table_name: string }[]>((list) =>
              list.map((item) => item.table_name).sort()
            );
            const sorted = mapped.sort();

            if (sorted.public?.length) {
              console.log(`✔ tables found (${sorted.public?.length} items):`, {
                public: sorted.public,
              });
              return resolve();
            }

            console.log(`✔ server is reachable.`);
            console.error(
              `✘ no public table found, please load your "prisma/schema.prisma" with "prisma db push".`
            );
            reject();
          }
        )
      )
      .catch(reject);
  });

testPsql()
  .then(() => {
    console.log("✔ PostgreSQL server working");
    process.exit(0);
  })
  .catch((err) => {
    console.error("✘ PostgreSQL server not working!", err);
    process.exit(1);
  });
