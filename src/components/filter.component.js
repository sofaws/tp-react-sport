import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import {ic_filter_list} from 'react-icons-kit/md/ic_filter_list';
import {ic_close} from 'react-icons-kit/md/ic_close'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import logo from './../logo.svg';
import './../App.css';
import FilterDropdown from './filterDropdown.component';
import {get} from "../services/equipments.service";

const widthFilter = '320px';

const filter = {
    backgroundColor: 'rgba(255,255,255,1)',
    position: 'absolute',
    borderRadius: '3px 0px 3px 3px',
    boxShadow: '0 3px 4px rgba(0,0,0,0.2)',
    zIndex: 100,
    marginTop: 60,
    minWidth: widthFilter,
    paddingTop: '20px',
    paddingBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    fontFamily: 'El Messiri',
    maxHeight: 'calc(100% - 130px)',
    zIndex: '1',
    transition: 'transform .2s ease-in-out',
};

const filterContainer = {
}

const show = {
    transform: 'translateX(0px)'
}

const notShow = {
    transform: 'translateX(-'+widthFilter+')'
}

const toggleButton = {
    backgroundColor: '#FAFAFA',
    width: '40px',
    height: '40px',
    borderRadius: '0 3px 3px 0',
    position: 'absolute',
    top: '0',
    right: '-40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',    
    boxShadow: '1px 2px 2px rgba(0,0,0,0.2)',
    zIndex: '-1',
}

const iconFilter = <Icon icon={ic_filter_list} />; 
const iconClose = <Icon icon={ic_close} />; 

class Filter extends Component {

    state = {
        selectedOption: '',
        departments: [],
        city: [],
        level: [],
        activities: [],
        show: true,
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

    toggleFilter(){
        this.setState({show: !this.state.show})
    }

    render() {
        let filter_class = this.state.show ? show : notShow;
        let icon_toggle = this.state.show ? iconClose : iconFilter;
        const { selectedOption } = this.state;
        console.log(this.state.level)

        return (
            <div style={{...filter, ...filter_class}}>  
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">We Analyse</h1>
                <div style={filterContainer}>
                    <FilterDropdown options={this.state.city} nomDropdown='Ville' />
                    <FilterDropdown options={this.state.departments} nomDropdown='Département' />
                    <FilterDropdown options={this.state.activities} nomDropdown="Type d'équipement" />
                    <FilterDropdown options={this.state.level} nomDropdown='Niveau' />
                </div>
                <div style={toggleButton} onClick={this.toggleFilter.bind(this)} >
                    { icon_toggle}
                </div>
            </div>
        );
    }
}

export default Filter;
