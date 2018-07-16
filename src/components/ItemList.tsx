import * as React from "react";
import Item, { ItemProps } from "./Item";
import './ItemList.css';

interface Props {
    items: ItemProps[];
}

export default function ItemList(props: Props) {

    return (
        <ul className="item-list">
            {props.items.map(item => {
                return (<Item key={item.imgUrl} title={item.title} imgUrl={item.imgUrl}
                    imgDate={item.imgDate} imgText={item.imgText} text={item.text} />);
            })}
            <footer className="footer">
                <span className="icon"><i className="fas fa-angle-right" />
                    <a href="#" className="footer-link">Alle News in der Ubersicht</a></span>
            </footer>
        </ul>
    );
}