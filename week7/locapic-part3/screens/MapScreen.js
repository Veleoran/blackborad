import { useEffect } from 'react';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import {Dimensions} from 'react-native';
import { useState} from 'react';

import * as Location from 'expo-location';

export default function MapScreen() {
  const [currentPosition, setCurrentPosition] = useState(null)

  useEffect(() => {
    (async () => {
      const { status }
       = await Location.requestForegroundPermissionsAsync();
 
      if (status === 'granted') {
        Location.watchPositionAsync({ distanceInterval: 10 },
          (location) => {
        setCurrentPosition(location.coords);
      });

    }
  })();
  }, []);
  
  return (
    <View style={{flex:1}}>
      <MapView mapType='hybrid' style={{ flex:1}}>
        {currentPosition && <Marker coordinate={currentPosition} title ='My position'pinColor='#fecb2d' />}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height:  Dimensions.get('window').height,
  },

});