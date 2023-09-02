import React from "react";
import { View, Text, StyleSheet } from "react-native";

import MapboxGL from '@rnmapbox/maps'
import MapScreen from "./MapScreen";

const myToken = 'sk.eyJ1IjoiZW1hc2xlc2ExIiwiYSI6ImNsbHpieDhjbjB3NDYzY3A2dHJiOHR2NDAifQ.3BBR9d_8x53M_93MzyqHHw';

MapboxGL.setAccessToken(myToken);
MapboxGL.setTelemetryEnabled(false);
MapboxGL.setWellKnownTileServer('Mapbox');


const App = () => {
  return (
    <View style={styles.container}>
      <MapScreen />
    </View>
    /*
    <View style={styles.container}>
      <MapboxGL.MapView
      style={styles.map}
      zoomEnabled={true}
      styleURL='mapbox://styles/mapbox/streets-v12'
      rotateEnabled={true}
      >
        <MapboxGL.Camera
        zoomLevel={15}
        centerCoordinate={[10.181667, 36.80638]}
        pitch={60}
        animationMode={'flyTo'}
        animationDuration={6000} />
        <MapboxGL.PointAnnotation
        id='marker'
        coordinate={[10.181667, 36.80638]} >
          <View />
        </MapboxGL.PointAnnotation>

      </MapboxGL.MapView>
      
    </View>
    */
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});


export default App;