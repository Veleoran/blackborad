import React from 'react';
import { View, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const photosData = [
  require('../assets/picture1.jpg'),
  require('../assets/picture2.jpg'),
  require('../assets/picture3.jpg'),
  require('../assets/picture4.jpg'),
];

export function GalleryScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={photosData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item} style={styles.image} />
            <TouchableOpacity style={styles.deleteIcon}>
              <FontAwesome name="times" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    margin: 5,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  deleteIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 5,
  },
});
