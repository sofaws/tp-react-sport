import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './../App.css';

const filterCtn = {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    fontFamily: 'Roboto',
    flex: 1,
    padding: '0 20px',
    marginTop: '15px',
};

const labelFilter = {
    flex: 1,
    textAlign: 'left',
    marginBottom: '5px',
    fontSize: '0.9em'
};

const selectStyle = {
    backgroundColor: 'rgba(240,240,240,0.4)',
    fontSize: '0.85em',
    textAlign: 'left'
};

const wrapperStyle = {
    flex: 1,
    textAlign: 'left'
};

const menuStyle = {
};

const menuContainerStyle = {
    backgroundColor: '#eee',
    fontSize: '0.85em',
};

class FilterDropdown extends Component {

    handleChange = (selectedOption) => {
        this.props.onChange(this.props.name, selectedOption ? selectedOption.value : null);
        if (selectedOption) {
            console.log(`Selected: ${selectedOption.label}`);
        }
    };

    render() {
        return (
            <div style={filterCtn}>
                <div style={labelFilter}>{this.props.nomDropdown}</div>
                <Select
                    name="form-field-name"
                    value={this.props.value}
                    onChange={this.handleChange}
                    options={ this.props.options.map((element) => {
                        return { value: element, label: element }
                    })}
                    style={selectStyle}
                    wrapperStyle={wrapperStyle}
                    menuStyle={menuStyle}
                    menuContainerStyle={menuContainerStyle}
                    placeholder={"Sélectionnez un " + this.props.nomDropdown.toLowerCase() + "..."}
                    noResultsText="Aucun résultat trouvé..."
                />
            </div>
        );
    }
}

export default FilterDropdown;
