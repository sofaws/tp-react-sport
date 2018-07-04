import React, {Component} from "react";
import { Icon } from 'react-icons-kit';
import {ic_close} from 'react-icons-kit/md/ic_close';

const container = {
    // backgroundColor: "rgba(0, 0, 0, 0.4)",
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
    padding: '20px 15px 20px 20px',
    overflowY: 'auto',
    width: 300,
    borderRadius: '3px',
    boxShadow: '0 3px 6px rgba(0,0,0,0.3)',
    left: '20px',
    bottom: '20px',
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transform: 'translateY(0)',
    transition: 'transform .3s ease-in-out',
};

const messageStyle = {
    fontSize: '0.8em',
    color: '#333',
    fontFamily: 'Arial',
    textAlign: 'left',
};

const visible = {
    transform: 'translateY(-70px)',
};

const iconStyle = {
    // position: 'absolute',
    // right: '0',
    cursor: 'pointer',
};

class Popup extends Component {

    render() {
        return this.props.visible ?
            <div style={container} onClick={this.props.onClose}>
                <div style={popup} onClick={(e) => e.stopPropagation()}>
                    <div style={messageStyle}>{ this.props.message }</div>
                    <Icon style={iconStyle} icon={ic_close} />
                </div>
            </div>
            : null
    }
}

export default Popup;
