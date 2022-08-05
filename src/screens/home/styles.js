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
    viewIcons:{
      width: 100,
      height: 200,
    },
    save: {
      position: 'absolute',
      top: 80,
      left: 30,
    },
    produtos: {
      position: 'absolute',
      top: 120,
      left: 30,
    },
    logo: {
        width: 300,
        height: 200,
    },
    viewForm: {
        width: '100%',
        marginTop: -35
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
      justifyContent: 'center',
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
    },
    textoResultado: {
      fontSize: 20,
      color: '#BF996F',
      fontWeight: 'bold',
      marginLeft: 5
    },

    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      width: 350,
      height: 270,
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      width: 100,
      borderRadius: 10,
      padding: 10,
      marginTop: 10,
      elevation: 3
    },
    buttonClose: {
      backgroundColor: '#BF996F',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginLeft: 2,
      fontSize: 15,
      color: '#BF996F',
      fontWeight: 'bold'
    },
    textInputNomeModal: {
      width: 300,
      height: 40,
      borderWidth:1,
      borderColor: '#BF996F',
      borderRadius: 10,
      padding: 10,
      fontSize: 15,
      color: '#BF996F',
      marginTop: 5,
    },
    textInputDescricaoModal: {
      width: 300,
      height: 80,
      borderWidth:1,
      borderColor: '#BF996F',
      borderRadius: 10,
      paddingLeft: 10,
      fontSize: 15,
      color: '#BF996F',
      marginTop: 5,
    },
    modalMargemView: {
      width: 250,
      height: 170,
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    textInputMargemModal: {
      width: 180,
      height: 40,
      borderWidth:1,
      borderColor: '#BF996F',
      borderRadius: 10,
      padding: 10,
      fontSize: 15,
      color: '#BF996F',
      marginTop: 5,
    },
  });

  export default styles;