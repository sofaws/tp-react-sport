import React, { Component } from 'react';
import Map from './components/map.component';
import Filter from "./components/filter.component";
import {get} from "./services/equipments.service";
import Loader from "./components/loader.component";

class App extends Component {
    state = {
        departments: [],
        gymnasium: [],
        isLoad: false
    };

    async componentWillMount() {
        const departments = await get('departments');
        const city = await get('city');
        const level = await get('level');
        const activities = await get('activities');
        const gymnasium = await get('gymnasium', { city: "Paris "});
        this.setState({
            departments,
            gymnasium,
            isLoad: true,
        })
    }

  render() {
    return (
          <div className="App">
              { !this.state.isLoad && <Loader />}
              <Filter />
              <button style={{ position: 'fixed', bottom: '25px', right: '50px', width: '55px', height: '55px', borderRadius: '50%',
                  backgroundColor: '#ff4757', zIndex: '1', fontSize: '2em', color: 'white', textAlign: 'center', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 4px' }}>
                  <div>+</div>
              </button>
                  <div className="App-intro">
                      <Map isMarkerShown markers={this.state.gymnasium}/>
                  </div>
          </div>
    );
  }
}

export default App;
