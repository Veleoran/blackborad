import React, { useState } from 'react';
import { View, Text } from 'react-native';
import AutocompleteDropdown from 'react-native-autocomplete-dropdown';

const CitySearch = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const fetchData = async (query) => {
    const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${query}&autocomplete=0`);
    const data = await response.json();
    return data.features.map((item) => ({
      id: item.properties.id,
      label: item.properties.label,
    }));
  };

  const handleSelectCity = (item) => {
    setSelectedCity(item.label);
  };

  return (
    <View>
      <AutocompleteDropdown
        placeholder="Search city"
        onChangeText={fetchData}
        onSelectItem={handleSelectCity}
      />
      {selectedCity && <Text>{selectedCity}</Text>}
    </View>
  );
};

export default CitySearch;
