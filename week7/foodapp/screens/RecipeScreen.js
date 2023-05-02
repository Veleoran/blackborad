import { StyleSheet, Text, View } from 'react-native';

export default function RecipeScreen() {
  return (
    <View style={styles.container}>
      <Text>RecipeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFEB85"
  },
});
