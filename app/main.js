import {sql} from "@vercel/postgres";
import "./main.css"
import Item from "./item";
import {itemClick} from "./events"

export default async function Main({}) {

    const {rows} = await sql`SELECT * from item`;

    return (
        <div>{
            rows.map((row)=>(
                <Item key={row.item_id} content={row.item_content}/>
            ))
        }
        </div>
    );
}
