import "./main.css"
import {itemClick} from "./events"

export default async function Item({content}) {


    return (
        <div className="item">
            <img className="pictureType" src="/dir.svg" alt="123"/>
            {content}
        </div>
    );
}