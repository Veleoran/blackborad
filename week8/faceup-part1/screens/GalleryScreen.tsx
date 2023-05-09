import React from 'react';
import { View, Text, Image } from 'react-native';

export function GalleryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Gallery Screen</Text>
      <Image source={require('../assets/picture1.jpg')} />
      <Image source={require('../assets/picture2.jpg')} />
      <Image source={require('../assets/picture3.jpg')} />
      <Image source={require('../assets/picture4.jpg')} />
    </View>
  );
}
