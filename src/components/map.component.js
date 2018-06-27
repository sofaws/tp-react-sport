import React, { Component } from 'react';
import { withProps, withHandlers, withStateHandlers, compose } from 'recompose';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} from "react-google-maps";
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
const infoWindowLabelEmphasis = {
    fontSize: '1.2em',
    marginBottom: '5px',
}

const infoWindow = {
    textAlign: 'left'
}

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
    withStateHandlers(() => ({
        isOpen: false,
        showId: '0',
      }), {
        onToggleOpen: ({ isOpen }) => (a) => ({
          isOpen: !isOpen,
        }),
        showInfo: ({ showInfo, isOpen }) => (a) => ({
            isOpen: !isOpen,
            showInfoIndex: a
        })
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
            {props.markers.map((marker, index) => {

                console.log(marker.EquGpsX, marker.EquGpsY);
                return <Marker
                    key={marker._id}
                    position={{ lat: parseFloat(marker.EquGpsY), lng: parseFloat(marker.EquGpsX) }}
                    onClick={() => props.showInfo(index)}
                    >
                      {props.showInfoIndex == index && <InfoWindow onCloseClick={props.onToggleOpen}>
                        <div style={infoWindow}>
                            <div style={infoWindowLabelEmphasis}><strong>{marker.Activité}</strong></div>
                            <div><strong>Niveau :</strong> {marker.Niveau}</div>
                            <div><strong>Accès PMR :</strong> {marker.EquAccesHandimAire}</div>
                            <div><strong>Lieu :</strong> {marker.EquNom} ({marker['Type d\'équipement']}) {marker.InsNom}</div>
                            <div>{marker.InsNoVoie} {marker.InsLibelleVoie}, {marker.InsArrondissement}</div>
                            <div><strong>Surface du lieu :</strong> {marker.EquSurfaceEvolution}m</div>
                        </div>  
                      </InfoWindow>}
                </Marker>
            })}
        </MarkerClusterer>
    </GoogleMap>
);
