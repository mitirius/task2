import * as React from "react";
import './Tab.css';
import ItemList from './ItemList';
import { ItemProps } from './Item';


interface State {
    activeIndex: number;
}

interface Props {
    items: ItemProps[];
}


export default class Tab extends React.PureComponent<Props, State> {

    state = {
        activeIndex: 0,
    }

    _onClick = (idx: number) => this.setState({ activeIndex: idx })

    render() {
        return (
            <>
                <div className="tab">
                    <div className="tab__btns">
                        <button className={this.state.activeIndex === 0 ? "tab__nav-btn tab__nav-btn--active" : "tab__nav-btn"} onClick={this._onClick.bind(this, 0)}>Aktuelles</button>
                        <button className={this.state.activeIndex === 1 ? "tab__nav-btn tab__nav-btn--active" : "tab__nav-btn"} onClick={this._onClick.bind(this, 1)}>Veranstaltungen</button>
                    </div>
                </div>
                {(this.state.activeIndex === 0) ? <ItemList items={this.props.items.filter(function (i, idx) { return idx <= 3; })} /> : <ItemList items={this.props.items.filter(function (i, idx) { return idx > 3; })} />}
            </>
        );
    }
}