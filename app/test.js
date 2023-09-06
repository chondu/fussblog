import { sql } from "@vercel/postgres";
export default async function Cart({ params }) {
    const { rows } = await sql`SELECT * from item`;

    return (
        <div>
            {rows.map((row) => (
                <div key={row.item_id}>
                    {row.item_type}-{row.item_content}
                </div>
            ))}
        </div>
    );
}