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
      width: '100%',
      backgroundColor: "#0202",
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
//style = { styles.scrowView }
  export default styles;