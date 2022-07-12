import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    logo: {
        width: 400,
        height: 400,
    },
    textCadastro: {
        width: '100%',
        marginLeft: 50,
        fontSize: 20,
        color: '#BF996F',
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: -40
    },
    viewInput:{
        flexDirection: 'row',
        width: '100%',
        height: 60,
        alignItems: 'center',
        marginTop: 10
    },
    icon: {
        height: 25,
        width: 25,
        marginLeft: 10
    },
    textInput: {
        width: 315,
        height: 45,
        marginLeft: 10,
        borderWidth:1,
        borderColor: '#BF996F',
        borderRadius: 10,
        padding: 10,
        fontSize: 15,
        color: '#BF996F'
    },
    salvarBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BF996F',
        borderRadius: 15,
        width: 350,
        height: 55,
        marginTop: 50,
        marginLeft: 20
    },
    salvarText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF'
    },
    labelError: {
        fontSize: 13,
        color: '#BF996F',
        width:'100%',
        marginLeft: 50,
    }
  });

  export default styles;