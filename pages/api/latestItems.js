const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  pingInterval: 30000,
  connectionLimit: 5
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // Get the latest distinct "location" for each item
      const rows = await pool.query(`
        SELECT
          h1.item_name,
          h1.location,
          h1.buy_price_per_unit,
          h1.sell_price_per_unit,
          CAST(UNIX_TIMESTAMP(h1.created_at) AS CHAR) AS created_at
        FROM historical_prices h1
        LEFT JOIN historical_prices h2
          ON h1.location = h2.location
          AND (h1.created_at < h2.created_at OR (h1.created_at = h2.created_at AND h1.id < h2.id))
        WHERE h2.location IS NULL;
      `);

      res.status(200).json(rows);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
