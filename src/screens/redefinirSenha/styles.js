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
      top: '50%',
      left: '28%',
    },
    logo: {
        width: 300,
        height: 200,
        marginTop: '5%',
    },
    viewInput:{
      width: '100%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '1%',
    },
    textInput: {
      width: '85%',
      height: 45,
      borderWidth:1,
      borderColor: '#BF996F',
      borderRadius: 10,
      padding: '2%',
      fontSize: 15,
      color: '#BF996F',
      marginLeft: '2%'
    },
    Btn: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#BF996F',
      borderRadius: 15,
      width: '85%',
      height: 55,
      marginTop: '60%',
      marginLeft: '2%'
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
    },
    modalView: {
      width: '88%',
      height: '30%',
      margin: '4%',
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
      width: '50%',
      borderRadius: 10,
      padding: '3%',
      marginTop: '18%',
      elevation: 3,
      alignSelf: 'flex-end',
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
      marginLeft: '0.5%',
      fontSize: 16,
      color: '#BF996F',
      marginBottom: '7%'
    },
    title: {
      fontSize: 32,
      color: '#BF996F',
      fontWeight: 'bold',
      marginBottom: '2%'
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    }
  });

  export default styles;