import React, { Component } from 'react';
import './../App.css';

const inputContainer = {
    display: 'flex',
    flexFlow: 'column nowrap',
    padding: '10px 20px 0 20px',
};

const label = {
    textAlign: 'left',
    flex: 1,
    marginBottom: '5px', 
    fontSize: '0.9em',
};

const input = {
    bottom: 0,
    color: '#aaa',
    left: 0,
    lineHeight: '34px',
    paddingLeft: '10px',
    paddingRight: '10px',
    backgroundColor: 'rgba(240, 240, 240, 0.4)',
    borderColor: '#d9d9d9 #ccc #b3b3b3',
    borderRadius: '4px',
    border: '1px solid #ccc',
    flex: 1,
};

class InputText extends Component {

    render() {
        return (
            <div style={inputContainer}>
                <div style={label}>{this.props.name}</div>
                <input type="text" style={input} placeholder={"Entrez un"+ this.props.gender + " " + this.props.name.toLowerCase() + "..."} />
            </div>
        );
    }
}

export default InputText;
