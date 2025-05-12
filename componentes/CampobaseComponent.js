<<<<<<< HEAD
import React, { Component } from 'react';
=======
import {react,Component } from 'react';
>>>>>>> ca0ce5f (Botones o Iconos)
import Constants from 'expo-constants';
import Calendario from './CalendarioComponent';
import DetalleExcursion from './DetalleExcursionComponent';
import Contacto from './ContactoComponent';
import QuienesSomos from './QuienesSomosComponent';
<<<<<<< HEAD
import { Platform, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
=======
import { Platform, View,StyleSheet, Image,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import { Icon } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
>>>>>>> ca0ce5f (Botones o Iconos)
import Home from './HomeComponent';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

<<<<<<< HEAD
=======

function CustomDrawerContent(props) {

  const styles = StyleSheet.create({ 
    container: { 
      flex: 1, 
    }, 
    drawerHeader: { 
    backgroundColor: '#015afc', 
    height: 100, 
    alignItems: 'center', 
    justifyContent: 'center', 
    flex: 1, 
    flexDirection: 'row' 
    }, 
    drawerHeaderText: { 
    color: 'white', 
    fontSize: 24, 
    fontWeight: 'bold' 
    }, 
    drawerImage: { 
    margin: 10, 
    width: 80, 
    height: 60 
    } 
  });

return ( 
  <DrawerContentScrollView {...props}> 
    <SafeAreaView style={styles.container} forceInset={{ top: 'always',
    horizontal: 'never' }}> 
      <View style={styles.drawerHeader}> 
      <View style={{flex:1}}> 
          <Image source={require('./imagenes/logo.png')} style={styles.drawerImage} /> 
          </View> 
          <View style={{flex: 2}}> 
            <Text style={styles.drawerHeaderText}> Gaztaroa</Text> 
          </View> 
        </View> 
        <DrawerItemList {...props} /> 
      </SafeAreaView> 
    </DrawerContentScrollView> 
  ); 
} 

>>>>>>> ca0ce5f (Botones o Iconos)
function ContactoNavegador() {
  return (
    <Stack.Navigator
      initialRouteName="Contacto"
      headerMode="float"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#015afc' },
        headerTitleStyle: { color: '#fff' },
      }}
    >
      <Stack.Screen
        name="Contacto"
        component={Contacto}
        options={{
          title: 'Contacto Gaztaroa',
          headerTitleAlign: 'center',
        }}
      /> 
      </Stack.Navigator>

      );
    }




function CalendarioNavegador() {
  return (
    <Stack.Navigator
      initialRouteName="Calendar"
      headerMode="float"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#015afc' },
        headerTitleStyle: { color: '#fff' },
      }}
    >
      <Stack.Screen
        name="Calendar"
        component={Calendario}
        options={{
          title: 'Calendario Gaztaroa',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="DetalleExcursion"
        component={DetalleExcursion}
        options={{
          title: 'Detalle Excursión',
          headerBackVisible: true,
          headerBackTitleVisible: true,
          headerBackButtonDisplayMode: 'default',
          headerBackTitle: 'Calendario gaztaroa',
        }}
      />
    </Stack.Navigator>
  );
}


function HomeNavegador() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
   headerMode: 'screen',
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#015afc' },
        headerTitleStyle: { color: '#fff' },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Campo Base',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

function QuienesSomosNavegador() {
  return(
    <Stack.Navigator
      initialRouteName="Quienes somos"
      headerMode="float"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#015afc' },
        headerTitleStyle: { color: '#fff' },
      }}
    >
      <Stack.Screen
        name="Quienes somos"
        component={QuienesSomos}
        options={{
          title: 'Quienes somos',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>

  )

}


function DrawerNavegador() {
  return (
      <Drawer.Navigator
      initialRouteName="Campo base"
<<<<<<< HEAD
=======
      drawerContent={(props) => <CustomDrawerContent {...props} />}
>>>>>>> ca0ce5f (Botones o Iconos)
      screenOptions={{
        headerShown: true,
        drawerStyle: {
          backgroundColor: '#c2d3da',
        },
      }}
      >
<<<<<<< HEAD
        <Drawer.Screen name="Campo base" component={HomeNavegador} />
        <Drawer.Screen name="Calendario" component={CalendarioNavegador} />
        <Drawer.Screen name="Contacto" component={ContactoNavegador} />
        <Drawer.Screen name="Quienes somos" component={QuienesSomosNavegador} />
=======
        <Drawer.Screen name="Campo base" component={HomeNavegador} 
            options={{ 
              drawerIcon: ({ tintColor}) => ( 
                <Icon 
                name='home' 
                type='font-awesome'             
                size={24} 
                color={tintColor} 
                /> 
              ) 
            }} 
          />
        <Drawer.Screen name="Calendario" component={CalendarioNavegador}
          options={{ 
                drawerIcon: ({ tintColor}) => ( 
                  <Icon 
                  name='calendar' 
                  type='font-awesome'             
                  size={24} 
                  color={tintColor} 
                  /> 
                ) 
              }} 
             />
        <Drawer.Screen name="Contacto" component={ContactoNavegador}
              options={{ 
                drawerIcon: ({ tintColor}) => ( 
                  <Icon 
                  name='address-card' 
                  type='font-awesome'             
                  size={24} 
                  color={tintColor} 
                  /> 
                ) 
              }} 
            />
        <Drawer.Screen name="Quienes somos" component={QuienesSomosNavegador}
         options={{ 
                drawerIcon: ({ tintColor}) => ( 
                  <Icon 
                  name='info-circle' 
                  type='font-awesome'             
                  size={24} 
                  color={tintColor} 
                  /> 
                ) 
              }} 
            />
>>>>>>> ca0ce5f (Botones o Iconos)
      </Drawer.Navigator>
  );
}

<<<<<<< HEAD

=======
>>>>>>> ca0ce5f (Botones o Iconos)
class Campobase extends Component {
  render() {
     return (
      <NavigationContainer>
        <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
          <DrawerNavegador />
        </View>
      </NavigationContainer>      
  );
  }
}

export default Campobase;