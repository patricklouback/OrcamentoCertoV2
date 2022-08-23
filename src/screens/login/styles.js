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
  viewInput: {
    flexDirection: 'row',
    width: '85%',
    height: 50,
    alignItems: 'center',
    marginTop: '2%',
    borderWidth: 1,
    borderRadius: 12,
  },
  icon: {
    height: 25,
    width: 25,
    marginLeft: '3%'
  },
  textInput: {
    width: '78%',
    height: 45,
    marginLeft: '2%',
    padding: '2%',
    fontSize: 15,
    color: '#BF996F',
  },
  viewEsqueci: {
    width: '100%',
    flexDirection: 'row',
    marginTop: '1.5%',
    justifyContent: 'flex-end',
  },
  esqueciSenhaBtn: {
    marginRight: '7%',
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
    width: '85%',
    height: 55,
    marginTop: '24%'
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF'
  },
  viewCadastreSe: {
    flexDirection: 'row',
    marginTop: '2.5%',
  },
  naoTemContaText: {
    color: '#BF996F'
  },
  cadastreSeText: {
    color: '#BF996F',
    fontWeight: 'bold',
  },
  labelError: {
    fontSize: 13,
    color: '#BF996F',
    width: '100%',
    marginLeft: '30%',
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
    marginTop: '5%',
  }

});

export default styles;