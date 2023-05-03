import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import  {addCity, removeCity } from '../reducers/user';
import { useState } from 'react';

export default function PlacesScreen() {
 const nickname = useSelector((state) => state.user.nickname);
 const cities = useSelector((state) => state.user.cities);
 const dispatch = useDispatch();

 const [search, setSearch] = useState('');

 const handleAddCity = async () => {
  if (search === '') return;

  
  try {
    const url = buildSearchUrl(search);
    const response = await fetch(url);
    const data = await response.json();
    if (data.features.length > 0) {
      const city = {
        name: data.features[0].properties.city,
        latitude: data.features[0].geometry.coordinates[1],
        longitude: data.features[0].geometry.coordinates[0],
      };
      dispatch(addCity(city));
    } else {
      alert('Aucune ville trouvée');
    }
  } catch (error) {
    alert('Erreur lors de la recherche de la ville');
  }
  setSearch('');
};

//   try {
//     const response = await fetch('https://api-adresse.data.gouv.fr/search/?q=${encodedAddress}&type=housenumber&autocomplete=1')
//   const data = await response.json();
//   if (data.features.length > 0) {
//     const city = {
//       name: data.features[0].properties.city,
//       latitude: data.features[0].geometry.coordinates[1],
//       longitude: data.features[0].geometry.coordinates[0],
//     };
//     dispatch(addCity(city));

//   } else {
//     alert('Aucune ville trouvée');
//   }

//  } catch (error) {
//   alert('Erreur lors de la recherche de la vile');
//  }
//  setSearch('');
// };

const handleRemoveCity = (cityName) => {
  dispatch(removeCity(cityName));
};


  const places = cities.map((data, i) => {
    return (
      <View key={i} style={styles.card}>
        <View>
          <Text style={styles.name}>{data.name}</Text>
          <Text>LAT : {data.latitude} LON : {data.longitude}</Text>
        </View>
        <TouchableOpacity onPress={() => handleRemoveCity(data.name)}>
        <FontAwesome name='trash-o' size={25} color='#ec6e5b' />
        </TouchableOpacity>
      </View>
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{nickname}'s places</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New city"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleAddCity}>
          <Text style={styles.textButton}>Add</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>{places}</ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 20,
  },
  scrollView: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  input: {
    width: '65%',
    marginTop: 6,
    borderBottomColor: '#ec6e5b',
    borderBottomWidth: 1,
    fontSize: 16,
  },
  button: {
    width: '30%',
    alignItems: 'center',
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
