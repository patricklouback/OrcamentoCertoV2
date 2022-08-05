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
    reload: {
      position: 'absolute',
      top: 75,
      left: 35,
    },
    viewInferior:{
      width: '100%',
      height: 50,
    },
    btnTirarFoto: {
      width: '80%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      backgroundColor: '#BF996F',
      marginTop: '30%'
    },
    btnSelecionarFoto: {
      width: '80%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      backgroundColor: '#BF996F',
      marginTop: '3%'
    },
    btnText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    textUser: {
      fontSize: 20,
      color: "#aa8761",
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      marginTop: 55,
      marginLeft: 40,
    },
    textUser2: {
      fontSize: 20,
      color: "#aa8761",
      marginTop: 55,
      marginLeft: 5,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      width: 350,
      height: 170,
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      paddingHorizontal: 35,
      paddingVertical: 26,
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
      width: '70%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginTop: 10,
      elevation: 3,
      alignSelf: 'flex-end'
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
      width: '100%',
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
//style = { styles.scrowView }
  export default styles;