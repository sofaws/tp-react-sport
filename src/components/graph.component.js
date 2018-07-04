import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import './../App.css';
import {Doughnut} from 'react-chartjs-2';
import _ from 'lodash';

const graph = {
    backgroundColor: 'rgba(255,255,255,1)',
    position: 'absolute',
    top: 0,
    right: 200,
    height: 400,
    width: 500,
    borderRadius: '3px 0px 3px 3px',
    boxShadow: '0 3px 4px rgba(0,0,0,0.2)',
    paddingTop: '20px',
    paddingBottom: '20px',
    zIndex: '10',
};


class Graph extends Component {

    state = {
        selectedOption: '',
        show: true,
    };

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    constructData = () => {
        const labels = _.uniq(_.map(this.props.markers, (element) => {
            return element["Activité"];
        }));

        const group =  _.groupBy(this.props.markers, 'Activité');
        const data = _.map(group, (element) => {
            return element.length;
        });


      return {
          labels,
          datasets: [{
              data,
              backgroundColor: _.map(data, () => {
                  return this.getRandomColor();
              }),
              hoverBackgroundColor: _.map(data, () => {
                  return this.getRandomColor();
              }),
          }]
      }
    };

    render() {
        const data = this.constructData();
        return (
            <div style={graph}>
                <Doughnut data={data}
                          width={50}
                          height={40}
                />
            </div>
        );
    }
}

export default Graph;
