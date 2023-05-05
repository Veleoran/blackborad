import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, SafeAreaView, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const [name, setName] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [markers, setMarkers] = useState([]);

  const addMarker = () => {
    setMarkers([
      ...markers,
      {
        title: name,
        coordinates: {
          latitude: Number(latitude).toString(),
          longitude: Number(longitude).toString(),
        },
      },
    ]);
    setName('');
    setLatitude('');
    setLongitude('');
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.inputSection}>
        <TextInput
          placeholder='Place Name'
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder='Latitude'
          value={latitude}
          onChangeText={setLatitude}
          keyboardType='numeric'
          style={styles.input}
        />
        <TextInput
          placeholder='Longitude'
          value={longitude}
          onChangeText={setLongitude}
          keyboardType='numeric'
          style={styles.input}
        />
        <Pressable style={styles.button} onPress={addMarker}>
          <Text style={styles.buttonText}>Go</Text>
        </Pressable>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: 45, // Choisir une latitude qui inclut toutes vos villes
          longitude: 0, // Choisir une longitude qui inclut toutes vos villes
          latitudeDelta: 90,
          longitudeDelta: 180,
        }}
        style={styles.map}>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            title={marker.title}
            coordinate={marker.coordinates}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '70%',
  },
  inputSection: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    width: '80%',
    borderColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 5,
    margin: 5,
    borderRadius: 10,
  },
  button: {
    marginTop: 5,
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 10,
    backgroundColor: '#16C172',
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
});
