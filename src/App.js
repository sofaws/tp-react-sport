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
                  <div className="App-intro">
                      <Map isMarkerShown markers={this.state.gymnasium}/>
                  </div>
          </div>
    );
  }
}

export default App;
