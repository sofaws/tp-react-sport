import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export default withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 48.866667, lng: 2.333333 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 48.866667, lng: 2.333333 }} />}
    </GoogleMap>))
