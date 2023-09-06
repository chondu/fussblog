import { sql } from "@vercel/postgres";
import "./main.css"

export default async function Main({ params }) {

    const { rows } = await sql`SELECT * from item`;

    return (
        <div className="main">
            {rows.map((row) => (
                <div key={row.item_id} className="item">
                    <img className="pictureType" src="/dir.svg" alt={row.item_type}/>
                    {row.item_type}-{row.item_content}
                </div>
            ))}
        </div>
    );
}