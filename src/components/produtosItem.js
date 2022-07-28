import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ProdutosItem({name, valor, description}) {
 return (
    <View style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{valor}</Text>
      <Text numberOfLines={5} style={styles.description}>
        {description}
      </Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
    containerFlat: {
      flexDirection: "row",
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      paddingVertical: 20,
    },
    contentFlat: {
      flex: 1,
      marginLeft: 16,
    },
    titleFlat: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#6F4E37",
      marginBottom: 16,
    },
    descriptionFlat: {
      fontSize: 16,
      color: "#000",
    },
  });