import React, { Component } from 'react';
import Map from './components/map.component';
import Filter from "./components/filter.component";

class App extends Component {
  render() {
    return (
      <div className="App">
              <Filter />
              <div className="App-intro">
                                    <Map isMarkerShown
                       googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCW63xOPQaOXfLqagwRfaj0R4Cc6KBe5zM"
                       loadingElement={<div style={{ height: `100%` }} />}
                       containerElement={    <div style={{    position: 'absolute',
                           top: 0,
                           left: 0,
                           right: 0,
                           bottom: 0,
                           justifyContent: 'flex-end',
                           alignItems: 'center',}} />}
                       mapElement={<div style={{ height: `100%` }} />}
                  />
          </div>
      </div>
    );
  }
}

export default App;
