import React, { Component } from 'react';
import PinItem from './PinItem'

class ListPinItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: [] //test
        }
    }

    render() {
        const pins = [{ image: "https://i.pinimg.com/originals/32/be/90/32be905f4a1ec74a40a3e88d13c77d4a.jpg", tag: 'mario' }, {image: 'https://i.pinimg.com/originals/70/ea/a0/70eaa0457573fe880f65af899d4aa5ed.jpg', tag: 'gorillaz'}];
        const listPinItems = pins.map((item, index) =>
            <PinItem key={index} image={item.image} tag={item.tag} />
        );
        return (
            <div className="divContainer">
                {listPinItems}
            </div>
        );
    }
}

export default ListPinItems;