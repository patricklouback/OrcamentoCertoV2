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
  });

  export default styles;