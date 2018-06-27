import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';

const filter = {
    flex: "25%",
    backgroundColor: 'blue',
    position: 'absolute',
    top: 100,
    left: 50,
    zIndex: 100
};

class Filter extends Component {
    render() {
        return (
            <div style={filter}>
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Analyse des sports</h1>
            </div>
        );
    }
}

export default Filter;
