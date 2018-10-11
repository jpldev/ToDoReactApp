import React, { Component } from 'react';


class PinItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMouseInside: false
        }
    }

    mouseEnter = () => {
        this.setState({ isMouseInside: true });
    }
    mouseLeave = () => {
        this.setState({ isMouseInside: false });
    }

    render() {
        return (
            <div className="divItem" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                <img alt={this.props.tag} src={this.props.image} height="400px" width="200px" />
                {this.state.isMouseInside ? <button>ElBoton</button> : null}
                {this.state.isMouseInside ? <h1>{this.props.tag}</h1> : null}
            </div>
        );
    }
}



export default PinItem;