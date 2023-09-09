"use client"
import "./item.css"
import Area from "./area";
import { useRef } from 'react'

export default function Item({item_content, item_id}) {
    const ref = useRef(null)
    function itemClick(item_id) {
        alert(item_id)
        const newComponent = (<Area item_parent={item_id}/>)
        ref.current.appendChild(newComponent)
    }

    return (
        <div className="item" onClick={() => itemClick(item_id)}>
            <img className="pictureType" src="/dir.svg" alt="123"/>
            {item_content}
            <div className="childItem" ref={ref}></div>
        </div>
    );
}