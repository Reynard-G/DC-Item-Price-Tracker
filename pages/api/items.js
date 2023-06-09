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
      const rows = await pool.query(`
        SELECT 
          item_name,
          location,
          buy_price_per_unit,
          sell_price_per_unit,
          CAST(UNIX_TIMESTAMP(created_at) AS CHAR) AS created_at
        FROM historical_prices
        WHERE location LIKE "[Reveille]%"
        ORDER BY created_at DESC
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

export const runtime = 'edge';