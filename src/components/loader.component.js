import React, {Component} from "react";

const loader = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: 200,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
   };

const message = {
  color: 'white',
  fontSize: "2em",
};

class Loader extends Component {

    state = {
        points : ".",
    };

    componentDidMount() {
        setInterval(() => {
            let points = this.state.points;
            if(points !== "...") {
                points += ".";
            } else {
                points = ".";
            }
            this.setState({
                points
            })
        }, 500)
    };

    render() {
        return (
            <div style={loader}>
                <p style={message}>Les données sont en cours de chargement {this.state.points}</p>
            </div>
        );
    }
}

export default Loader;
