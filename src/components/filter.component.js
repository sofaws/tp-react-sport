import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import logo from './../logo.svg';
import './../App.css';
import FilterDropdown from './filterDropdown.component';

const filter = {
    backgroundColor: 'rgba(255,255,255,1)',
    position: 'absolute',
    borderRadius: 3,
    boxShadow: '0 3px 4px rgba(0,0,0,0.2)',
    left: 30,
    zIndex: 100,
    marginTop: 60,
    minWidth: '320px',
    marginBottom: 30,
    paddingTop: '20px',
    paddingBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    fontFamily: 'El Messiri'
};

class Filter extends Component {
    state = {
        selectedOption: '',
    }
    
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        // selectedOption can be null when the `x` (close) button is clicked
        if (selectedOption) {
            console.log(`Selected: ${selectedOption.label}`);
        }
    }

    render() {
        const { selectedOption } = this.state;

        return (
            <div style={filter}>
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">We Analyse</h1>

                <FilterDropdown nomDropdown='Département' />
                <FilterDropdown nomDropdown='Type' />
                <FilterDropdown nomDropdown='Ville' />
                <FilterDropdown nomDropdown='Niveau' />
            </div>
        );
    }
}

export default Filter;
