import React, { Component } from 'react';
import Map from './components/map.component';
import Filter from "./components/filter.component";
import {getMarkers} from "./services/equipments.service";
import Loader from "./components/loader.component";

class App extends Component {
    state = {
        gymnasium: [],
        isLoad: false,
        city: "Bréval",
        level: null,
        activity: null,
        department: null,
    };
    async componentDidMount() {
      this.load();
    }

    load = async () => {
        const { level, activity, department, city} = this.state;
        const gymnasium = await getMarkers('gymnasium', { city, level, activity, department });
        this.setState({
            gymnasium,
            isLoad: true,
        })
    };

    onChange = (key, value) => {
        this.setState({
            [key]: value,
            isLoad: false,
        }, () => {
            this.load();
        });
    };

  render() {
      const { level, activity, department, city} = this.state;

      return (
          <div className="App">
              { !this.state.isLoad && <Loader />}
              <Filter level={level} activity={activity} department={department} city={city} onChange={this.onChange}/>
                  <div className="App-intro">
                      <Map isMarkerShown markers={this.state.gymnasium}/>
                  </div>
          </div>
    );
  }
}

export default App;
