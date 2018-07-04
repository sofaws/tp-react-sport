import React, {Component} from "react";
import { Icon } from 'react-icons-kit';
import {ic_close} from 'react-icons-kit/md/ic_close';

const popup = {
    backgroundColor: 'white',
    padding: '20px 15px 20px 20px',
    overflowY: 'auto',
    width: 300,
    borderRadius: '3px 14px 14px 3px',
    borderLeft: 'solid 4px #66e466',
    boxShadow: '0 3px 6px rgba(0,0,0,0.3)',
    left: '20px',
    bottom: '0',
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'transform .3s ease-in-out',
};

const messageStyle = {
    fontSize: '0.8em',
    color: '#333',
    fontFamily: 'Arial',
    textAlign: 'left',
};

const notVisible = {
    transform: 'translateY(80px)',    
    transitionDelay: '0s',
};

const visible = {
    transform: 'translateY(-20px)',
    transitionDelay: '1.5s',
};

const iconStyle = {
    cursor: 'pointer',
};

class Popup extends Component {

    render() {
        let style = this.props.visible ? {...popup, ...visible} : {...popup, ...notVisible};
        return (
            <div style={style} onClick={(e) => e.stopPropagation()}>
                <div style={messageStyle}>{ this.props.message }</div>
                <Icon style={iconStyle} icon={ic_close} onClick={() => this.props.closePopup()} />
            </div>
        )
    }
}

export default Popup;
