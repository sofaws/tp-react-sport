import React, { Component } from 'react';
import { withProps, withHandlers, compose } from 'recompose';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");


export default compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCW63xOPQaOXfLqagwRfaj0R4Cc6KBe5zM",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{    position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'flex-end',
            alignItems: 'center',}} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withHandlers({
        onMarkerClustererClick: () => (markerClusterer) => {
            const clickedMarkers = markerClusterer.getMarkers()
            console.log(`Current clicked markers length: ${clickedMarkers.length}`)
            console.log(clickedMarkers)
        },
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 48.856995, lng: 2.353455 }}
    >
        <MarkerClusterer
            onClick={props.onMarkerClustererClick}
            averageCenter
            enableRetinaIcons
            gridSize={60}
        >
            {props.markers.map(marker => {


                console.log(marker.EquGpsX, marker.EquGpsY);
                return <Marker
                    key={marker._id}
                    position={{ lat: parseFloat(marker.EquGpsY), lng: parseFloat(marker.EquGpsX) }}
                />
            })}
        </MarkerClusterer>
    </GoogleMap>
);
