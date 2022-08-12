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
        marginTop: '10%',
        backgroundColor: "#fcfaf9",
        borderWidth: 0.5,
        borderColor: "#aa8761",
    },
    logo: {
        width: 200,
        height: 100,
    },
    reload: {
      position: 'absolute',
      top: '35%',
      left: '7%',
    },
    viewInferior:{
      width: '100%',
      height: 20,
      backgroundColor: "#fcfaf9",
      borderWidth: 0.5,
      borderColor: "#aa8761",
    },
    flatHeader: { 
      width: '100%', 
      height: 50, 
      alignItems: 'center', 
      justifyContent: 'center',
    },
    containerFlat: {
      width: '85%',
      alignSelf: 'center',
      backgroundColor: "#fcfaf9",
      borderColor: "#aa8761",
      borderWidth: 0.5,
      borderRadius: 5,
      paddingHorizontal: '2%',
      paddingVertical: '2%',
      elevation: 4
    },
    contentFlat: {
      width:'100%',
    },
    titleFlat: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#aa8761",
    },
    titleHead: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#aa8761",
    },
    descriptionFlat: {
      fontSize: 15,
      color: "#aa8761",
      paddingHorizontal: '1%'
    },
    viewRow: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginBottom: '1%',
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
    padding: '5%',
  },
  closeModal: {
    width: 50,
    height: 50,
    alignItems: 'flex-end',
    position: 'absolute',
    top: '8%',
    right: '8%',
  },
  button: {
    width: '25%',
    backgroundColor: '#BF996F',
    borderRadius: 4,
    padding: '4%',
    elevation: 3,
    alignSelf: 'flex-end',
    marginRight: '2%',
    marginTop: '2%'
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
//style = { styles.scrowView }
  export default styles;