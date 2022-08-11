import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  viewLogo: {
    width: '100%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: '5%'
  },
  viewIcons: {
    width: 100,
    height: 200,
  },
  save: {
    position: 'absolute',
    top: '40%',
    left: '13%',
  },
  logo: {
    width: 250,
    height: 150,
  },
  viewForm: {
    width: '100%',
    alignItems: 'center',
  },
  viewInput: {
    flexDirection: 'row',
    width: '55%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '2%',
  },
  textInput: {
    width: '42%',
    height: 45,
    fontSize: 15,
    color: '#BF996F',
    backgroundColor: '#f9f3ed',
    borderColor: '#BF996F',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center'
  },
  Btn: {
    width: '57%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BF996F',
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    marginTop: '15%',
    elevation: 2
  },
  BtnText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
  },
  viewAlteraMargem: {
    width: '84%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: '8%',
  },
  querAlterarText: {
    color: '#BF996F'
  },
  cliqueAquiText: {
    color: '#BF996F',
    fontWeight: 'bold',
  },
  viewResultado: {
    flexDirection: 'row',
    width: '85%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f3ed',
    borderColor: '#BF996F',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: '2%',
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
    marginLeft: '1.5%'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '90%',
    height: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: '7%',
  },
  closeModal: {
    position: 'absolute',
    top: '8%',
    right: '6%'
  },
  button: {
    width: '25%',
    backgroundColor: '#BF996F',
    borderRadius: 4,
    padding: '4%',
    elevation: 3,
    alignSelf: 'flex-end',
    marginRight: '2%',
    marginTop: '8%'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#BF996F',
    marginBottom: '1%'
  },
  textInputNomeModal: {
    width: '70%',
    height: 40,
    fontSize: 14,
    color: '#BF996F',
    borderColor: '#BF996F',
    borderWidth: 0.5,
    borderRadius: 8,
    padding: '2%',
    marginBottom: '3%',
  },
  textInputDescricaoModal: {
    width: '98%',
    height: 80,
    fontSize: 14,
    color: '#BF996F',
    borderColor: '#BF996F',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingLeft: '2%',
  },
  modalMargemView: {
    width: '90%',
    height: 200,
    backgroundColor: '#f9f3ed',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: '7%',
  },
  textInputMargemModal: {
    width: '25%',
    height: 40,
    fontSize: 15,
    color: '#BF996F',
    backgroundColor: 'white',
    borderColor: '#BF996F',
    borderWidth: 0.5,
    borderRadius: 5,
    padding: '2%',
    marginTop: '4%'
  },
});

export default styles;