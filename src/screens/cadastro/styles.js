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
        fontSize: 20,
        color: '#BF996F',
        fontWeight: 'bold',
        marginTop: '-10%',
        marginBottom: '7%',
        textAlign: 'center',
    },
    viewInput:{
        flexDirection: 'row',
        width: '100%',
        height: 60,
        alignItems: 'center',
        marginTop: '2.5%',
    },
    icon: {
        height: 25,
        width: 25,
        marginLeft: '7%'
    },
    textInput: {
        width: '80%',
        height: 45,
        fontSize: 15,
        color: '#BF996F',
        borderWidth:1,
        borderColor: '#BF996F',
        borderRadius: 10,
        padding: '2%',
        marginLeft: '2%',
    },
    salvarBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BF996F',
        borderRadius: 15,
        width: '85%',
        height: 55,
        marginTop: '25%',
        marginLeft: '2%'
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
        marginLeft: '16%',
    }
  });

  export default styles;