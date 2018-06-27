import React, { Component } from 'react';
import Map from './components/map.component';
import Filter from "./components/filter.component";
import {getMarkers} from "./services/equipments.service";
import Loader from "./components/loader.component";

class App extends Component {
    state = {
        gymnasium: [],
        isLoad: false
    };

    async componentDidMount() {
        const gymnasium = await getMarkers('gymnasium', { city: "Paris "});
        this.setState({
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
