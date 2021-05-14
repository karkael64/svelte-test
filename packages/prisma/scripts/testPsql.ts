import dotenv from "dotenv";
dotenv.config();

import { Client } from "pg";
import { arrayGroupBy, objectMap, objectSort } from "@test/common";

export const testPsql = (): Promise<void> =>
  new Promise((resolve, reject) => {
    type Result = { table_schema: string; table_name: string };

    const client = new Client({
      connectionString: process.env.PG_DATABASE,
      ssl: false,
    });

    client
      .connect()
      .then(() =>
        client.query<Result>(
          "SELECT table_schema, table_name FROM information_schema.tables;",
          (err, res) => {
            client.end();
            if (err) return reject(err);
            console.log(`✔ server is reachable.`);

            const grouped = arrayGroupBy(res.rows, "table_schema");
            const mapped = objectMap(grouped, (list) =>
              list.map((item) => item.table_name).sort()
            );
            const sorted = objectSort(mapped);

            // const grouped = res.rows.groupBy("table_schema");
            // const mapped = grouped.map<string[], typeof grouped>((list) =>
            //   list.map((item) => item.table_name).sort()
            // );
            // const sorted = mapped.sort<typeof mapped>();

            if (sorted.public?.length) {
              console.log(`✔ tables found (${sorted.public?.length} items):`, {
                public: sorted.public,
              });
              return resolve();
            }

            console.error(
              `✘ no public table found, please load your schema with \`prisma db push\`.`
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
    console.log("➜ process.env.PG_DATABASE", process.env.PG_DATABASE);
    console.error("✘ PostgreSQL server not working!", err);
    process.exit(1);
  });
