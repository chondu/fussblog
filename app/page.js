import { sql } from "@vercel/postgres";
import "./page.css"
export default async function Cart({ params }) {
    const { rows } = await sql`SELECT * from item`;

    return (
        <div>
            {rows.map((row) => (
                <div key={row.item_id}>
                    {row.item_id} - {row.item_content}
                </div>
            ))}
        </div>
    );
}