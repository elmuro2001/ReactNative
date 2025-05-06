import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Campobase from './componentes/CampobaseComponent';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return(
  <SafeAreaProvider>
    <View style={styles.container}>
      <Campobase/>
      <StatusBar style="auto" />
    </View>
  </SafeAreaProvider>
=======
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
>>>>>>> 70bce62 (Initial commit)
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD

=======
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
>>>>>>> 70bce62 (Initial commit)
  },
});
