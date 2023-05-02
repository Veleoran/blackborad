import React from 'react';
import { Image, Button, StyleSheet, Text, View } from 'react-native';

const MapScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/map.jpg')} style={styles.mapImage} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    mapImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
  });
  
  export default MapScreen;