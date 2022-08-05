import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { useRoute } from '@react-navigation/native';

import { Entypo, AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, setDoc, doc, } from 'firebase/firestore';
import styles from './styles';

import { useForm, Controller } from 'react-hook-form'

export default function Home({ navigation }) {

  const route = useRoute();
  const { uid } = route.params;

  const [margem, setMargem] = useState(2.4);
  const [valorFinal, setValorFinal] = useState('');
  const [custo, setCusto] = useState('');
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
  })

  const calcularValorFinal = (data) => {
    const itensString = [data.item1, data.item2, data.item3, data.item4, data.item5, data.item6,
    data.item7, data.item8, data.item9, data.item10, data.item11, data.item12, data.item13, data.item14];
    var soma = 0
    for (let index = 0; index < itensString.length; index++) {
      if (itensString[index] == undefined || itensString[index] == '') {
        soma += 0;
      } else {
        soma += parseFloat(itensString[index])
      }
    }
    var result = (soma * margem).toFixed(2).replace('.', ',')
    setCusto(soma.toFixed(2).replace('.', ','))
    setValorFinal(result)
  }

  const saveProduct = () => {

    const firestore = getFirestore();
    var UID = uid.trim();
    var name = nome.trim();

    const docData = {
      nome: nome,
      descricao: descricao,
      custo: custo,
      valorFinal: valorFinal,
      margem: margem,
      uid: uid
    };

    setDoc(doc(firestore, UID, name), docData)
      .then(Alert.alert('Sucesso!', 'Produto salvo com sucesso!'));

    reset();

  }

  const saveNomeDescricao = data => {
    setNome(data.nomeDoProduto);
    setDescricao(data.descricaoDoProduto);
    setModalVisible(!modalVisible);
  }

  const saveMargem = data => {
    var mrg = data.margemnova == '' || data.margemnova == undefined ? 2.4 : parseFloat(data.margemnova);
    setMargem(mrg);
    setModal2Visible(!modal2Visible);
  }

  useEffect(() => {
    const storeUid = async () => {
      try {
        await AsyncStorage.setItem('uid', uid)
      } catch (e) {
        alert('Nenhum dado chegou.')
      }
    }

    storeUid();
  }, [])

  useEffect(() => {
    if (nome == '' || descricao == '') {
      return
    } else {
      saveProduct();
    }
  }, [nome, descricao])

  function abreTelaProdutos() {
    reset();
    navigation.navigate('produtos', { uid: uid })
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>

        <View style={styles.viewLogo}>
            <TouchableOpacity style={styles.save} onPress={() => { setModalVisible(true) }}>
              <Entypo
                name='save'
                size={35}
                color='#BF996F'
              />
            </TouchableOpacity>

          <Image
            style={styles.logo}
            source={require('../../images/logo.png')}
          />
        </View>

        <View style={styles.viewForm}>
          <View style={styles.viewInput}>
            <Controller
              control={control}
              name='item1'
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.textInput}
                  placeholder='Item 1'
                  underlineColorAndroid='transparent'
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  autoCapitalize='none'
                  keyboardType='numeric'
                />
              )}
            />

            <Controller
              control={control}
              name='item2'
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.textInput}
                  placeholder='Item 2'
                  underlineColorAndroid='transparent'
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  autoCapitalize='none'
                  keyboardType='numeric'
                />
              )}
            />
          </View>
          <View style={styles.viewInput}>
            <Controller
              control={control}
              name='item3'
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.textInput}
                  placeholder='Item 3'
                  underlineColorAndroid='transparent'
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  autoCapitalize='none'
                  keyboardType='numeric'
                />
              )}
            />

            <Controller
              control={control}
              name='item4'
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.textInput}
                  placeholder='Item 4'
                  underlineColorAndroid='transparent'
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  autoCapitalize='none'
                  keyboardType='numeric'
                />
              )}
            />
          </View>
          <View style={styles.viewInput}>
            <Controller
              control={control}
              name='item5'
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.textInput}
                  placeholder='Item 5'
                  underlineColorAndroid='transparent'
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  autoCapitalize='none'
                  keyboardType='numeric'
                />
              )}
            />

            <Controller
              control={control}
              name='item6'
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.textInput}
                  placeholder='Item 6'
                  underlineColorAndroid='transparent'
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  autoCapitalize='none'
                  keyboardType='numeric'
                />
              )}
            />
          </View>
          <View style={styles.viewInput}>
            <Controller
              control={control}
              name='item7'
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.textInput}
                  placeholder='Item 7'
                  underlineColorAndroid='transparent'
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  autoCapitalize='none'
                  keyboardType='numeric'
                />
              )}
            />

            <Controller
              control={control}
              name='item8'
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.textInput}
                  placeholder='Item 8'
                  underlineColorAndroid='transparent'
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  autoCapitalize='none'
                  keyboardType='numeric'
                />
              )}
            />
          </View>
          <View style={styles.viewInput}>
            <Controller
              control={control}
              name='item9'
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.textInput}
                  placeholder='Item 9'
                  underlineColorAndroid='transparent'
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  autoCapitalize='none'
                  keyboardType='numeric'
                />
              )}
            />

            <Controller
              control={control}
              name='item10'
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.textInput}
                  placeholder='Item 10'
                  underlineColorAndroid='transparent'
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  autoCapitalize='none'
                  keyboardType='numeric'
                />
              )}
            />
          </View>
          <View style={styles.viewInput}>
            <Controller
              control={control}
              name='item11'
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.textInput}
                  placeholder='Item 11'
                  underlineColorAndroid='transparent'
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  autoCapitalize='none'
                  keyboardType='numeric'
                />
              )}
            />

            <Controller
              control={control}
              name='item12'
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.textInput}
                  placeholder='Item 12'
                  underlineColorAndroid='transparent'
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  autoCapitalize='none'
                  keyboardType='numeric'
                />
              )}
            />
          </View>
          <View style={styles.viewInput}>
            <Controller
              control={control}
              name='item13'
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.textInput}
                  placeholder='Item 13'
                  underlineColorAndroid='transparent'
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  autoCapitalize='none'
                  keyboardType='numeric'
                />
              )}
            />

            <Controller
              control={control}
              name='item14'
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.textInput}
                  placeholder='Item 14'
                  underlineColorAndroid='transparent'
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  autoCapitalize='none'
                  keyboardType='numeric'
                />
              )}
            />
          </View>

        </View>


        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Nome do Produto: </Text>
              <Controller
                control={control}
                name='nomeDoProduto'
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.textInputNomeModal}
                    placeholder='Nome do Produto'
                    underlineColorAndroid='transparent'
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
              <Text style={styles.modalText}>Descrição do Produto: </Text>
              <Controller
                control={control}
                name='descricaoDoProduto'
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.textInputDescricaoModal}
                    placeholder='Descrição do Produto'
                    underlineColorAndroid='transparent'
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    multiline={true}
                  />
                )}
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={handleSubmit(saveNomeDescricao)}>
                <Text style={styles.textStyle}>Salvar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modal2Visible}
          onRequestClose={() => {
            setModal2Visible(!modal2Visible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalMargemView}>
              <Text style={styles.modalText}>Nova Margem (Padrão 2.4x): </Text>
              <Controller
                control={control}
                name='margemnova'
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.textInputMargemModal}
                    placeholder='Nova Margem do Produto'
                    underlineColorAndroid='transparent'
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    keyboardType='numeric'
                  />
                )}
              />

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={handleSubmit(saveMargem)}>
                <Text style={styles.textStyle}>Salvar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>



        <TouchableOpacity style={styles.Btn} onPress={handleSubmit(calcularValorFinal)}>
          <Text style={styles.BtnText}>
            Calcular
          </Text>
        </TouchableOpacity>

        <View style={styles.viewAlteraMargem}>
          <Text style={styles.querAlterarText}>Quer alterar a Margem de Lucro? </Text>
          <TouchableOpacity onPress={() => { setModal2Visible(true) }}>
            <Text style={styles.cliqueAquiText}>
              Clique aqui
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewResultado}>
          <Text style={styles.textoValorFinal}>
            O valor final é: R$
          </Text>
          <Text style={styles.textoResultado}>
            {valorFinal}
          </Text>
        </View>


      </View>
    </TouchableWithoutFeedback>
  );
}