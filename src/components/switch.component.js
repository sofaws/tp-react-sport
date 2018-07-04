import React, { Component } from 'react';
import Switch from "react-switch";
import './../App.css';

const switchContainer = {
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

const switchInput = {
  bottom: 0,
  left: 0,
  flex: 1,
};


class SwitchComponent extends Component {

    render() {
        return (
            <div style={switchContainer}>
              <div style={label}>{this.props.name}</div>
              <Switch
                style={switchInput}
                checked={this.props.value}
                onChange={(e) => this.props.onChange(e)}
                value={this.props.value}
              />
            </div>
        );
    }
}

export default SwitchComponent;
