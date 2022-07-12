import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    logo: {
        width: 450,
        height: 400,
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
        marginLeft: 30
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
    viewEsqueci: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 8,
        justifyContent: 'flex-end',
    },
    esqueciSenhaBtn: {
        marginRight: 30
    },
    esqueciSenhaText: {
        fontSize: 16,
        color: '#BF996F'
    },
    loginBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BF996F',
        borderRadius: 15,
        width: 350,
        height: 55,
        marginTop: 90
    },
    loginText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF'
    },
    viewCadastreSe: {
        flexDirection: 'row',
        marginTop: 20
    },
    naoTemContaText: {
        color: '#BF996F'
    },
    cadastreSeBtn: {

    },
    cadastreSeText: {
        color: '#BF996F',
        fontWeight: 'bold',
    },
    labelError: {
        fontSize: 13,
        color: '#BF996F',
        width:'100%',
        marginLeft: 140,
    }


  });

  export default styles;