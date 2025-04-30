import React, { Component } from 'react';
import Constants from 'expo-constants';
import Calendario from './CalendarioComponent';
import DetalleExcursion from './DetalleExcursionComponent';
import Contacto from './ContactoComponent';
import QuienesSomos from './QuienesSomosComponent';
import { Platform, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './HomeComponent';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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
      screenOptions={{
        headerShown: true,
        drawerStyle: {
          backgroundColor: '#c2d3da',
        },
      }}
      >
        <Drawer.Screen name="Campo base" component={HomeNavegador} />
        <Drawer.Screen name="Calendario" component={CalendarioNavegador} />
        <Drawer.Screen name="Contacto" component={ContactoNavegador} />
        <Drawer.Screen name="Quienes somos" component={QuienesSomosNavegador} />
      </Drawer.Navigator>
  );
}


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