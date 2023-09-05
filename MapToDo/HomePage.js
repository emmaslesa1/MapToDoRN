import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to My App!</Text>
      <FontAwesomeIcon name='star-o' size={50}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomePage;


