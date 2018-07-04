import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import {ic_pie_chart} from 'react-icons-kit/md/ic_pie_chart'
import {ic_close} from 'react-icons-kit/md/ic_close';
import 'react-select/dist/react-select.css';
import './../App.css';
import {Doughnut} from 'react-chartjs-2';
import _ from 'lodash';


const widthFilter = '500px';

const graph = {
    backgroundColor: 'rgba(255,255,255,1)',
    position: 'fixed',
    top: 0,
    marginTop: 60,
    right: '-500px',
    height: 400,
    width: widthFilter,
    borderRadius: '3px 0px 3px 3px',
    boxShadow: '0 3px 4px rgba(0,0,0,0.2)',
    paddingTop: '20px',
    paddingBottom: '20px',
    zIndex: '10',
    transition: 'transform .2s ease-in-out',
};

const show = {
    transform: 'translateX(0px)'
}

const notShow = {
    transform: 'translateX(-'+widthFilter+')'
}

const toggleButton = {
    backgroundColor: '#FAFAFA',
    width: '40px',
    height: '40px',
    borderRadius: '3px 0px 0px 3px',
    position: 'absolute',
    top: '0',
    left: '-40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '-2px 1px 2px rgba(0,0,0,0.2)',
    zIndex: '-1',
    cursor: 'pointer'
};

const iconFilter = <Icon icon={ic_close} />;
const iconClose = <Icon icon={ic_pie_chart} />;

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

    state = {
        selectedOption: '',
        show: true,
    };


    toggleFilter(){
        this.setState({show: !this.state.show})
    }

    render() {
        let filter_class = this.state.show ? show : notShow;
        let icon_toggle = this.state.show ? iconClose : iconFilter;
        const { selectedOption } = this.state;
        const data = this.constructData();
        return (
            <div style={{...graph, ...filter_class}}>
                <Doughnut data={data}
                          width={50}
                          height={40}
                />
                <div style={toggleButton} onClick={this.toggleFilter.bind(this)} >
                    { icon_toggle}
                </div>
            </div>
        );
    }
}

export default Graph;
