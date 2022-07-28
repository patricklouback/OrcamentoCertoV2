import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    viewLogo: {
        width: '100%',
        justifyContent:'flex-end',
        flexDirection:'row',
    },
    logo: {
        width: 300,
        height: 200,
    },
    back: {
      position: 'absolute',
      top: 80,
      left: 30,
    },
    scrowView:{
      width: '100%',
      backgroundColor: '#000'
    },
    viewInferior:{
      width: '100%',
      height: 50,
    },
    containerFlat: {
      width: 350,
      borderRadius:20,
      backgroundColor: "#fcfaf9",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      paddingVertical: 20,
    },
    contentFlat: {
      width:'100%',
      marginLeft: 16,
    },
    titleFlat: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#aa8761",
    },
    titleHead: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#aa8761",
    },
    descriptionFlat: {
      fontSize: 16,
      color: "#aa8761",
    },
    viewRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  });
//style = { styles.scrowView }
  export default styles;