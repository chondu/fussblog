"use client"

import "./main.css"
import {itemClick} from "./events"

export default function Item({item_content,item_id}) {


    return (
        <div className="item" onClick={() => itemClick(item_id)}>
            <img className="pictureType" src="/dir.svg" alt="123"/>
            {item_content}
        </div>
    );
}