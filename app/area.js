import {sql} from "@vercel/postgres";
import "./main.css"
import Item from "./item";
import {itemClick} from "./events"

export default async function Area({item_parent}) {

    const {rows} = await sql`SELECT * FROM item WHERE item_parent=${item_parent}`;

    return (
        <div>{
            rows.map((row)=>(
                <Item key={row.item_id} item_content={row.item_content} item_id={row.item_id}/>
            ))
        }
        </div>
    );
}
