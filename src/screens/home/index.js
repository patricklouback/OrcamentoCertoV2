import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Home() {
 return (
   <View style = { styles.container }>
    
    <Image
      style = { styles.logo }
      source= { require('../../images/logo.png') }
    />
    <Text style = { styles.textHome }>
      Home
    </Text>
   </View>
  );
}