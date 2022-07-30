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
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        width: 300,
        height: 220,
        margin: 20,
        backgroundColor: '#FFF',
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
        marginTop: 40,
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
      modalMargemView: {
        width: 250,
        height: 180,
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
        width: 240,
        height: 40,
        borderWidth:1,
        borderColor: '#BF996F',
        borderRadius: 10,
        padding: 10,
        fontSize: 15,
        color: '#BF996F',
        marginTop: 15,
      },
      loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }

  });

  export default styles;