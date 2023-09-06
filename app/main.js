import {sql} from "@vercel/postgres";
import "./main.css"
import Area from "./area";
import {itemClick} from "./events"

export default async function Main({}) {

    const {rows} = await sql`SELECT item_id FROM item WHERE item_depth=0`;

    return (
        <div>
            <Area item_parent={rows[0].item_id}/>
        </div>
    );
}
