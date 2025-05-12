import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ca0ce5f (Botones o Iconos)
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Campobase from './componentes/CampobaseComponent';
import { SafeAreaProvider } from 'react-native-safe-area-context';

<<<<<<< HEAD

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
=======
>>>>>>> ca0ce5f (Botones o Iconos)

export default function App() {
  return(
  <SafeAreaProvider>
    <View style={styles.container}>
      <Campobase/>
      <StatusBar style="auto" />
    </View>
<<<<<<< HEAD
>>>>>>> 70bce62 (Initial commit)
=======
  </SafeAreaProvider>
>>>>>>> ca0ce5f (Botones o Iconos)
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
<<<<<<< HEAD

=======
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
>>>>>>> 70bce62 (Initial commit)
=======

>>>>>>> ca0ce5f (Botones o Iconos)
  },
});
