import React, { Component } from 'react';
import Map from './components/map.component';
import Filter from "./components/filter.component";
import {get, getMarkers} from "./services/equipments.service";
import Loader from "./components/loader.component";
import Modal from "./components/modal.component";

class App extends Component {
    state = {
        gymnasium: [],
        isLoad: false,
        city: "Bréval",
        level: null,
        activity: null,
        department: null,
        modalVisible: false,
        departments: [],
        cities: [],
        levels: [],
        activities: []
    };

    async componentDidMount() {
      this.load();
    }

    load = async () => {
        const { level, activity, department, city} = this.state;
        const gymnasium = await getMarkers('gymnasium', { city, level, activity, department });
        const departments = await get('departments');
        const cities = await get('city');
        const levels = await get('level');
        const activities = await get('activities');
        this.setState({
            gymnasium,
            departments,
            cities,
            levels,
            activities,
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
              <Filter
                  departments={this.state.departments}
                  cities={this.state.cities}
                  levels={this.state.levels}
                  activities={this.state.activities}
                  level={level}
                  activity={activity}
                  department={department}
                  city={city}
                  onChange={this.onChange}/>
              <button onClick={() => this.setState({ modalVisible: true })}
                  style={{ position: 'fixed', bottom: '57px', right: '57px', width: '55px', height: '55px', borderRadius: '50%', border: '0px',
                  backgroundColor: '#ff4757', zIndex: '1', fontSize: '2em', color: 'white', textAlign: 'center', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 4px', outline: 0,
                  border: 'none', cursor: 'pointer' }}>
                  <div>+</div>
              </button>

                  <div className="App-intro">
                      <Map refresh={this.onChange} isMarkerShown markers={this.state.gymnasium}/>
                  </div>
              <Modal closeModal={() => this.setState({modalVisible: false })} refresh={this.onChange} visible={this.state.modalVisible} onClose={() => this.setState({ modalVisible: false })}/>
          </div>
    );
  }
}

export default App;
