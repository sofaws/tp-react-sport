import React, {Component} from "react";

const container = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: 200,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
};

const popup = {
    backgroundColor: 'white',
    height: 400,
    width: 400,
    borderRadius: "6px 6px 3px 3px;"
};


class Popup extends Component {

    render() {
        return this.props.visible ?
            <div style={container} onClick={this.props.onClose}>
                <div style={popup} onClick={(e) => e.stopPropagation()}>
                    <p>test</p>
                </div>
            </div>
            : null
    }
}



export default Popup;
