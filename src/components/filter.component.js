import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import logo from './../logo.svg';
import './../App.css';
import FilterDropdown from './filterDropdown.component';
import {get} from "../services/equipments.service";

const filter = {
    backgroundColor: 'rgba(255,255,255,1)',
    position: 'absolute',
    borderRadius: 3,
    boxShadow: '0 3px 4px rgba(0,0,0,0.2)',
    // left: 30,
    zIndex: 100,
    marginTop: 60,
    minWidth: '320px',
    paddingTop: '20px',
    paddingBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    fontFamily: 'El Messiri',
    left: '-400px',
    transform: 'translateX(430px)',
    transition: 'transform .2s ease-in',
    maxHeight: 'calc(100% - 130px)'
};

const filterContainer = {
    overflowY: 'auto',
}

class Filter extends Component {
    state = {
        selectedOption: '',
        departments: [],
        city: [],
        level: [],
        activities: [],
    };

    async componentDidMount() {
        const departments = await get('departments');
        const city = await get('city');
        const level = await get('level');
        const activities = await get('activities');
        this.setState({
            departments,
            city,
            level,
            activities
        })
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        // selectedOption can be null when the `x` (close) button is clicked
        if (selectedOption) {
            console.log(`Selected: ${selectedOption.label}`);
        }
    };

    render() {
        const { selectedOption } = this.state;
        console.log(this.state.level)
        return (
            <div style={filter}>
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">We Analyse</h1>
                <div style={filterContainer}>
                    <FilterDropdown options={this.state.city} nomDropdown='Ville' />
                    <FilterDropdown options={this.state.departments} nomDropdown='Département' />
                    <FilterDropdown options={this.state.activities} nomDropdown='Type' />
                    <FilterDropdown options={this.state.level} nomDropdown='Niveau' />
                </div>
            </div>
        );
    }
}

export default Filter;
