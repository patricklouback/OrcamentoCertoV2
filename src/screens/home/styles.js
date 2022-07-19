import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    viewLogo: {
        width: '100%',
        alignItems:'flex-end',
    },
    logo: {
        width: 300,
        height: 200,
    },
    viewForm: {
        width: '100%',

    },
    viewInput:{
      flexDirection: 'row',
      width: '100%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10
    },
    textInput: {
      width: 150,
      height: 45,
      borderWidth:1,
      borderColor: '#BF996F',
      borderRadius: 10,
      padding: 10,
      fontSize: 15,
      color: '#BF996F',
      marginLeft: 10
    },
    Btn: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#BF996F',
      borderRadius: 15,
      width: 350,
      height: 55,
      marginTop: 25
    },
    BtnText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFF'
    },
    labelError: {
      fontSize: 13,
      color: '#BF996F',
      width:'100%',
      marginLeft: 140,
    },
    viewAlteraMargem: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: 20,
      marginRight: 70,
    },
    querAlterarText: {
        color: '#BF996F'
    },
    cliqueAquiText: {
        color: '#BF996F',
        fontWeight: 'bold',
    },
    viewResultado: {
      width: 350,
      height: 100,
      marginTop: 20,
      borderRadius: 20,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#f9f3ed',
      borderWidth:2,
      borderColor: '#BF996F',
      flexDirection: 'row',
    },
    textoValorFinal: {
      fontSize: 20,
      color: '#BF996F',
      fontWeight: 'bold',
      marginLeft: 35
    },
    textoResultado: {
      fontSize: 20,
      color: '#BF996F',
      fontWeight: 'bold',
      marginLeft: 5
    }
  });

  export default styles;