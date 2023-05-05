import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, SafeAreaView } from 'react-native';
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
          latitude: Number(latitude),
          longitude: Number(longitude),
        },
      },
    ]);
    setName('');
    setLatitude('');
    setLongitude('');
  };

  return (
    <View>
      <SafeAreaView>
        <TextInput
          placeholder='Place Name'
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder='Latitude'
          value={latitude}
          onChangeText={setLatitude}
          keyboardType='numeric'
        />
        <TextInput
          placeholder='Longitude'
          value={longitude}
          onChangeText={setLongitude}
          keyboardType='numeric'
        />
        <Pressable onPress={addMarker}>
          <Text>Go</Text>
        </Pressable>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: 5,
          longitude: 5,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
        style={{ width: '100%', height: '70%' }}>
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
