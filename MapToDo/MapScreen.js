import React, { useRef, useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import MapboxGL from '@rnmapbox/maps'


const MapScreen = () => {

  const [zoomLevel, setZoomLevel] = useState(11); // Initial zoom level


  // Function to handle zoom in button press
  const handleZoomIn = () => {
    if (zoomLevel < 20) {
      // Increase the zoom level (up to a maximum of 20)
      const newZoomLevel = zoomLevel + 1;
      setZoomLevel(newZoomLevel);
    }
  };

  // Function to handle zoom out button press
  const handleZoomOut = () => {
    if (zoomLevel > 1) {
      // Decrease the zoom level (down to a minimum of 1)
      const newZoomLevel = zoomLevel - 1;
      setZoomLevel(newZoomLevel);
    }
  };


  return (
    <View style={styles.container}>
      <MapboxGL.MapView
        style={styles.map} //43.836670776245725, 18.296654218956213
        centerCoordinate={[18.29634, 43.83488]} // Sarajevo Skate Park coordinates
        zoomLevel={zoomLevel}
        zoomEnabled={true}
        rotateEnabled={true}
      >
        <MapboxGL.Camera
        zoomLevel={zoomLevel}
        centerCoordinate={[18.29634, 43.83488]}
        pitch={60}
        animationMode={'flyTo'}
        animationDuration={6000} />
        <MapboxGL.PointAnnotation 
        id='marker'
        coordinate={[18.29634, 43.83488]} >
         <MapboxGL.Callout title="Sarajevo Skate Park" />
         </MapboxGL.PointAnnotation>
       
        {/* Add your map features, markers, etc. here */}
        <MapboxGL.PointAnnotation
          id="city-center" 
          coordinate={[18.40808, 43.85546]} // Sarajevo City Center coordinates
        >
        <MapboxGL.Callout title="Sarajevo City Center" />
        </MapboxGL.PointAnnotation>
          
       
        <MapboxGL.PointAnnotation
          id="vojna-bolnica" //43.858343356824705, 18.40840716942921
          coordinate={[18.40833, 43.85833]} // Vojna bolnica coordinates
        >
          <MapboxGL.Callout title="Vojna bolnica" />
          </MapboxGL.PointAnnotation>
    

        <MapboxGL.PointAnnotation
          id="bbi" //43.85845, 18.41670
          coordinate={[18.41670, 43.85845]} // BBI coordinates
        >
         <MapboxGL.Callout title="BBI" />
         </MapboxGL.PointAnnotation> 
     
      </MapboxGL.MapView>

     {/* Zoom buttons */}
      <View style={styles.zoomButtons}>
        <TouchableOpacity style={styles.zoomButton} onPress={handleZoomIn}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.zoomButton} onPress={handleZoomOut}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View> 
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  zoomButtons: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'column',
  },
  zoomButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default MapScreen;
