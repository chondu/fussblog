import {sql} from '@vercel/postgres';
import "./area.css"
import Item from "./item";


export default async function Area({item_parent}) {

    const {rows} = await sql`SELECT * FROM item WHERE item_parent=${item_parent}`

    const items = rows.map(row => (
        <Item
            key={row.item_id}
            item_content={row.item_content}
            item_id={row.item_id}
        />
    ))

    return (
        <div className="area">
            {items}
        </div>
    );

}



