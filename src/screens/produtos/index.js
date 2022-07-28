import React, {useState, useEffect} from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Modal, Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { AntDesign  } from '@expo/vector-icons';
import { getFirestore, getDoc , doc,} from 'firebase/firestore';
import styles from './styles';

export default function Produtos() {
    const route = useRoute();
    const {uid} = route.params;

    const produtosList = [
        {
          id: '1',
          name: "Produto 1",
          valor: '5.90',
          description:
            "Teste descrição",
        },
        {
            id: '2',
            name: "Produto 2",
            valor: '10.50',
            description:
            "Teste descrição 2",
        },
        {
            id: '3',
            name: "Produto 1",
            valor: '5.90',
            description:
              "Teste descrição",
          },
          {
              id: '4',
              name: "Produto 2",
              valor: '10.50',
              description:
              "Teste descrição 2",
          },
          {
            id: '5',
            name: "Produto 1",
            valor: '5.90',
            description:
              "Teste descrição",
          },
          {
              id: '6',
              name: "Produto 2",
              valor: '10.50',
              description:
              "Teste descrição 2",
          }
    ];

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

        <FlatList 
                    data={produtosList}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => 
                        <View style={styles.containerFlat}>
                            <View style={styles.contentFlat}>
                                <Text style={styles.titleFlat}>{item.name}</Text>
                                <Text style={styles.descriptionFlat}>{item.valor}</Text>
                                <Text numberOfLines={5} style={styles.descriptionFlat}>{item.description}</Text>
                            </View>
                        </View>
                     }
        />

        <View style = { styles.viewInferior }></View>
    </View>
    );
  }