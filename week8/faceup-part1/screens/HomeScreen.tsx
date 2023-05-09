import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
screens/HomeScreen.tsx

const handleSubmit = () => {
 navigation.navigate('TabNavigator', { screen: 'Gallery' });
};

const EMAIL_REGEX: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const handleSubmit = () => {
 if (EMAIL_REGEX.test(email)) {
   navigation.navigate('TabNavigator', { screen: 'Gallery' });
 } else {
   setEmailError(true);
 }
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
