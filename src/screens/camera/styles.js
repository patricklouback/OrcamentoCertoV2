import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    camera: {
      width: '155%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonsView: {
      width: '100%',
      height: 50,
      flexDirection: 'row', 
      alignItems: 'center',
      position: 'absolute',
      top: '7%',
      paddingLeft: '7%',
      paddingRight: '7%',
      justifyContent: 'space-between',
    },
    button: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: '#FFF',
      elevation: 10,
      position: 'absolute',
      bottom: '6%',
      left: '40%'
    },
    documentView:{
      width: 350,
      height: 531,
      position: 'absolute',
      top: '19%',
      left: '7.5%',
      justifyContent:'space-between',
    },
    documentTopLeft:{
      width: 52,
      height: 66,
      borderTopWidth: 2,
      borderLeftWidth: 2,
      borderColor: '#F71B64',
    },
    documentTopRight:{
      width: 52,
      height: 66,
      borderTopWidth: 2,
      borderRightWidth: 2,
      borderColor: '#F71B64',
    },
    documentBottomLeft:{
      width: 52,
      height: 66,
      borderLeftWidth: 2,
      borderBottomWidth: 2,
      borderColor: '#F71B64',
    },
    documentBottomRight:{
      width: 52,
      height: 66,
      borderRightWidth: 2,
      borderBottomWidth: 2,
      borderColor: '#F71B64',
    },
  });

  export default styles;