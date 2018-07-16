import * as React from "react";
import './Item.css';

export interface ItemProps {
    title: string;
    imgUrl: string;
    imgText: string;
    imgDate: string;
    text: string;
}

export default function Item(props: ItemProps) {
    return (
        <li className="item">
            <img className="item-img" src={props.imgUrl} alt={props.imgText} />
            <div className="item-details">
                <p className="item-date">{props.imgDate}</p>
                <p className="item-title">{props.title}</p>
                <p className="item-text">{props.text}</p>
                <span>
                    <i className="fas fa-angle-right" />
                    <a href="#" className="item-link">mehr informationen</a>
                </span>
            </div>
        </li>
    );
}