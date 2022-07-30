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
    back: {
      position: 'absolute',
      top: 80,
      left: 30,
    },
    logo: {
        width: 300,
        height: 200,
    },
    viewInput:{
      width: '100%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    textInput: {
      width: 300,
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
      width: 315,
      height: 55,
      marginTop: 150,
      marginLeft: 10
    },
    BtnText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFF'
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      width: 350,
      height: 230,
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
      width: 150,
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
      marginBottom: 30
    },
    title: {
      marginLeft: 2,
      fontSize: 35,
      color: '#BF996F',
      fontWeight: 'bold',
      marginBottom: 5
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
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    }
  });

  export default styles;