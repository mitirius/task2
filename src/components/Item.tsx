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
            <img className="item__img" src={props.imgUrl} alt={props.imgText} />
            <div className="item__details details">
                <p className="details__date">{props.imgDate}</p>
                <h3 className="details__title">{props.title}</h3>
                <p className="details__text">{props.text}</p>
                <span className="details__footer">
                    <i className="fas fa-angle-right" />
                    <a href="#" className="details__footer--link">mehr informationen</a>
                </span>
            </div>
        </li>
    );
}