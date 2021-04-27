import dotenv from "dotenv";
dotenv.config();

import { Client } from "pg";
import "../common";

export const testPsql = (): Promise<Record<string, string[]>> =>
  new Promise((resolve, reject) => {
    type Result = { table_schema: string; table_name: string };

    const client = new Client({
      connectionString: process.env.PG_HEROKU,
      ssl: {
        rejectUnauthorized: false,
      },
    });

    client.connect();

    client.query<Result>(
      "SELECT table_schema, table_name FROM information_schema.tables;",
      (err, res) => {
        client.end();

        if (err) reject(err);
        const grouped = res.rows.groupBy("table_schema");
        const mapped = grouped.map<{ table_name: string }[]>((list) =>
          list.map((item) => item.table_name).sort()
        );
        const sorted = mapped.sort();
        resolve(sorted);
      }
    );
  });

testPsql().then(console.log).catch(console.error);
