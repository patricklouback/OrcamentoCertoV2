import React, {useState, useEffect} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Modal, Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { AntDesign  } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, setDoc, doc,} from 'firebase/firestore';
import styles from './styles';

export default function Produtos() {
    const route = useRoute();
    const {uid} = route.params;

    function abreTelaHome () {
        navigation.navigate('home', {uid: uid})
      }
  
   return (
    <View style = {styles.container}>
        <View style = { styles.viewLogo }>
            <TouchableOpacity style = {styles.back} onPress = {abreTelaHome}>
                <AntDesign
                    name= 'leftcircleo'
                    size= {35}
                    color= '#BF996F'
                    />
            </TouchableOpacity>
            <Image
                style = { styles.logo }
                source= { require('../../images/logo.png') }
            />
        </View>
    </View>
    );
  }