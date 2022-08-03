import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../../firebase';
import styles from './styles';

import { useForm, Controller } from 'react-hook-form'

export default function RedefinirSenha({ navigation }) {

  const [loadingVisible, setLoadingVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
  })

  useEffect(() => {
    setLoadingVisible(false);
    setModalVisible(false);
  }, [])

  function abreTelaLogin() {
    reset();
    navigation.navigate('login')
  }

  const esqueceuSenha = data => {
    setLoadingVisible(true);
    sendPasswordResetEmail(auth, data.email)
      .then(() => {
        setLoadingVisible(false);
        setModalVisible(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

      });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <View style={styles.container}>

        <View style={styles.viewLogo}>
          <View style={styles.viewIcons}>
            <TouchableOpacity style={styles.back} onPress={abreTelaLogin}>
              <AntDesign
                name='leftcircleo'
                size={35}
                color='#BF996F'
              />
            </TouchableOpacity>
          </View>

          <Image
            style={styles.logo}
            source={require('../../images/logo.png')}
          />
        </View>

        <View style={{ width: '100%', marginLeft: 75, marginBottom: 20, marginTop: 100 }}>
          <Text style={styles.title}>
            Insira seu email:
          </Text>
        </View>

        <View style={styles.viewInput}>
          <Controller
            control={control}
            name='email'
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.textInput}
                placeholder='Digite seu E-mail'
                underlineColorAndroid='transparent'
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                autoCapitalize='none'
                keyboardType='email-address'
              />
            )}
          />
        </View>

        <TouchableOpacity style={styles.Btn} onPress={handleSubmit(esqueceuSenha)}>
          <Text style={styles.BtnText}>
            Redefinir Senha
          </Text>
        </TouchableOpacity>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.title}>Pronto! </Text>

              <Text style={styles.modalText}>Verifique seu E-mail. </Text>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={abreTelaLogin}>
                <Text style={styles.textStyle}>Ir para o Login</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <View style={styles.loading}>
          <ActivityIndicator
            size="large"
            color="#BF996F"
            animating={loadingVisible}
          />
        </View>

      </View>

    </TouchableWithoutFeedback>
  );
}