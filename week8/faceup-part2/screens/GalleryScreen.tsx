import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
 } from 'react-native';
 import { useDispatch, useSelector } from 'react-redux';
 import { removePhoto, UserState } from '../reducers/user';
 import FontAwesome from 'react-native-vector-icons/FontAwesome';
 
 export default function GalleryScreen() {
  const dispatch = useDispatch();
  const user = useSelector((state: { user: UserState }) => state.user.value);
 
  const photos = user.photos.map((data: string, i: number) => {
    return (
      <View key={i} style={styles.photoContainer}>
        <TouchableOpacity onPress={() => dispatch(removePhoto(data))}>
          <FontAwesome name='times' size={20} color='#000000' style={styles.deleteIcon} />
        </TouchableOpacity>
 
        <Image source={{ uri: data }} style={styles.photo} />
      </View>
    );
  });
 
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Gallery</Text>
      <Text style={styles.text}>Logged as: {user.email}</Text>
 
      <ScrollView contentContainerStyle={styles.galleryContainer}>
        {photos}
      </ScrollView>
    </SafeAreaView>
  );
 }
 

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 19,
    textAlign: 'center',
    marginBottom: 20,
  },
  galleryContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoContainer: {
    position: 'relative',
    margin: 10,
  },
  deleteIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 5,
    borderRadius: 50,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
