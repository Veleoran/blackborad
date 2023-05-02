// import { Button, StyleSheet, Text, View } from 'react-native';

// export default function HomeScreen({ navigation }) {
//  return (
//    <View>
//      <Text>Home Screen</Text>
//      <Button
//        title="Go to Map"
//        onPress={() => navigation.navigate('TabNavigator')}
//      />
//    </View>
//  );
// }
import React, { useState } from 'react';
import { Image, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity} from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Image style={styles.image} source={require('../assets/home-image.jpg')} />
        <Text style={styles.title}>Welcome to Locapic</Text>
   
        <TextInput style={styles.input} placeholder="Nickname" />
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => navigation.navigate('TabNavigator')}>
          <Text style={styles.textButton}>Go to Map</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
   }
   
   const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: '50%',
    },
    title: {
      width: '80%',
      fontSize: 38,
      fontWeight: '600',
    },
    input: {
      width: '80%',
      marginTop: 25,
      borderBottomColor: '#EC6E5B',
      borderBottomWidth: 1,
      fontSize: 20,
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: 8,
      width: '80%',
      marginTop: 30,
      backgroundColor: '#EC6E5B',
      borderRadius: 10,
      marginBottom: 80,
    },
    textButton: {
      color: '#ffffff',
      height: 30,
      fontWeight: '600',
      fontSize: 16,
    },
   });