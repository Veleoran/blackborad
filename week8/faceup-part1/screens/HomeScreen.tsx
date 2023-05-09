import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../App'; // Ajustez le chemin d'accès si nécessaire

type HomeScreenRouteProp = RouteProp<StackParamList, 'Home'>;
type HomeScreenNavigationProp = StackNavigationProp<StackParamList, 'Home'>;

type Props = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

export function HomeScreen({ route, navigation }: Props) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const EMAIL_REGEX: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = () => {
    if (EMAIL_REGEX.test(email)) {
      navigation.navigate('TabNavigator', { screen: 'Gallery' });
    } else {
      setEmailError(true);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        style={{ borderWidth: 1, borderColor: 'black', padding: 5, marginBottom: 10 }}
      />
      {emailError && <Text style={{ color: 'red' }}>Invalid email</Text>}
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Go to Gallery</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
