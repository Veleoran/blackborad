import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
screens/HomeScreen.tsx

const handleSubmit = () => {
 navigation.navigate('TabNavigator', { screen: 'Gallery' });
};



export function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('../assets/background.png')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Gallery')}>
        <Text>Go to Gallery</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
