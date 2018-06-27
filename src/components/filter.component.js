import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';

const filter = {
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: 3,
    boxShadow: '0 3px 4px rgba(0,0,0,0.2)',
    left: 30,
    zIndex: 100,
    // height: 'calc(100% - 130px)',
    marginTop: 60,
    minWidth: '250px',
    marginBottom: 30,
    paddingTop: '20px',
    paddingBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    fontFamily: 'Galada'
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
