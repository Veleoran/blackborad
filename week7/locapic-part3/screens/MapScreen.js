import { useEffect } from 'react';
import { Modal, StyleSheet, Text, TextInput,TouchableOpacity, View } from 'react-native-web';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
// import { StyleSheet, View } from 'react-native';
import {Dimensions} from 'react-native';
import { useState} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { addPlace } from '../reducers/user';

import * as Location from 'expo-location';

export default function MapScreen() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value)

  const [currentPosition, setCurrentPosition] = useState(null);
  const [tempCoordinates, setTempCoordinates] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [newPlaceName, setNewPlaceName] = useState("")
  const[newPlaceCoordinates, setNewPlaceCoordinates] = useState(null);
  const places = useSelector((state) => state.user.value.places);
 




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


  const handleLongPress = (e) => {
    setTempCoordinates(e.nativeEvent.coordinate);
    setModalVisible(true);
    };

    const handleNewPlace = () => {
      dispatch(addPlace({ name: newPlace, latitude:
      tempCoordinates.latitude, longitude: tempCoordinates.longitude }));
      setModalVisible(false);
      setNewPlaceName("");
    };
    const handleClose = () => {
      setModalVisible(false);
      setNewPlaceName("");
    };
const markers = user.places.map((data, i) => {
  return<Marker key={i} coordinate={{ latitude: data.lat
  , longitude: data.longitude }} title={data.name} />
});
  
  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} animationType="fade" transparent>
        <View style= {styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput placeholder="New place" onChangeText={(value) =>
            setNewPlace(value)} value={newPlace}  style={styles.input} />
            <TouchableOpacity onPress={() => handleNewPlace()} style=
            {styles.button} activeOpacity={0.8}>
              <Text style= {styles.textButton}>Close</Text>
              </TouchableOpacity>
              </View>
            </View>
            </Modal>


      <MapView onLognPress= {(e) => 
      handleLongPress(e) } mapType="hybrid" style={styles.map}>
{currentPosition && <Marker coordinate={currentPosition} title ='My position' pinColor='#fecb2d' />}
         {markers}
         </MapView>
    </View>
   );
    }
      
const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
    height:  Dimensions.get('window').height,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    evelation: 5,
  },

  input: {
    width: 150,
    borderBottomColor: '#ec6e5b',
    borderBottomWidth: 1,
    fontSize: 16,
  },
  button: {
    width: 150,
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 8,
    backgroundColor: '#ec6e5b',
    borderRadius: 10,
  },
  textButton: {
    color: '#ffffff',
    height: 24,
    fontWeight: '600',
    fontSize: 15,
  },
 });