
import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import { getAuth, updateProfile } from "firebase/auth";

const Tab = createBottomTabNavigator();

import Home from "../screens/home";
import Produtos from "../screens/produtos";
import Configuracao from '../screens/configuracao';
import { Image, StyleSheet } from 'react-native';

export function RotaApp() {
  const route = useRoute();
  const { uid, capturedPhoto } = route.params;
  const [avatar, setAvatar] = useState(null)

  useEffect(() => {
    LerUser();
  })

  const LerUser = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user !== null) {
      user.providerData.forEach((profile) => {
        setAvatar(profile.photoURL);
      });
    }

  }

  return (

    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Orçamento') {
          iconName = "attach-money";
          return <MaterialIcons name={iconName} size={size} color={color} />
        } else if (route.name === 'Meus Produtos') {
          iconName = "view-list";
          return <MaterialIcons name={iconName} size={size} color={color} />
        } else if (route.name === 'Perfil') {

          if (avatar == null) {
            iconName = "settings";
            return <MaterialIcons name={iconName} size={size} color={color} />
          } else {
            return <Image
            style={styles.avatar}
            source={{ uri: avatar }}/>
          }
        }

        // You can return any component that you like here!
        //return <MaterialIcons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#aa8761',
      tabBarInactiveTintColor: 'gray',
      headerShown: false
    })}
    >
      <Tab.Screen name="Orçamento" component={Home} initialParams={{ uid: uid }} />
      <Tab.Screen name="Meus Produtos" component={Produtos} initialParams={{ uid: uid }} />
      <Tab.Screen name="Perfil" component={Configuracao} initialParams={{ uid: uid }} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  avatar: {
     width: 32, 
     height: 32,
     borderRadius: 20,
     borderColor: '#aa8761',
     borderWidth: 0.5
  }
});