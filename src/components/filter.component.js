import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import logo from './../logo.svg';
import './../App.css';

const filter = {
    backgroundColor: 'rgba(255,255,255,1)',
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
    fontFamily: 'El Messiri'
};

const filterCtn = {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    fontFamily: 'Roboto'
};

const selectStyle = {
    maxWidth: '170px',
    backgroundColor: 'rgba(240,240,240,0.4)',
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
                <h1 className="App-title">Analyse des sports</h1>

                {/* <input type="checkbox" id="test1"/> */}

                <div style={filterCtn}>
                    <label for="test1">Département</label>
                    <Select
                        name="form-field-name"
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={[
                        { value: 'one', label: 'One' },
                        { value: 'two', label: 'Two' },
                        ]}
                        style={selectStyle}
                    />
                </div>
            </div>
        );
    }
}

export default Filter;
