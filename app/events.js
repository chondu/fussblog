

import { sql } from "@vercel/postgres";
export function itemClick(item_id) {
    sql`SELECT * FROM public.item WHERE item_parent=${item_id}`.then(({rows})=>{
        console.log(rows)
    })
}