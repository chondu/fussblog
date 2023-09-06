import { sql } from "@vercel/postgres";
const { rows } = await sql`SELECT * from item`;
export default function handler(req, res) {
    res.status(200).json(rows)
}