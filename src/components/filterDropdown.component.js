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
    state = {
        selectedOption: '',
    }
    
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        if (selectedOption) {
            console.log(`Selected: ${selectedOption.label}`);
        }
    }

    render() {
        const { selectedOption } = this.state;

        return (
            <div style={filterCtn}>
                <div style={labelFilter}>{this.props.nomDropdown}</div>
                <Select
                    name="form-field-name"
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                    ]}
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
