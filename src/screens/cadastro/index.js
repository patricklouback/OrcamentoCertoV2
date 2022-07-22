import React, { useEffect } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from '../../../firebase';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import styles from './styles';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object({
  email: yup.string().required('Informe seu email'),
  senha: yup.string().min(6, 'A senha deve conter pelo menos 6 dígitos').required('Informe sua senha')
})

export default function Cadastro({navigation}) {

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })

  useEffect(()=>{
    reset();
  },[])

  function abreTelalogin(){
    reset();
    navigation.navigate('login');
  }

  const handleNewAccount = data => {
    createUserWithEmailAndPassword(auth, data.email, data.senha)
    .then((userCredential) => {
      const user = userCredential.user;
      abreTelalogin();
      sendEmailVerification(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      
    }); 
  }

 return (
   <View style = { styles.container }>
    
    <Image
      style = { styles.logo }
      source= { require('../../images/logo.png') }
    />
     <KeyboardAvoidingView behavior='position' enabled>

    <Text style = { styles.textCadastro }>
      Preencha os campos abaixo:
    </Text>
    
    <View style = { styles.viewInput }>
      <Image
        style = { styles.icon }
        source = { require('../../images/email.png') }
      />
    <Controller
      control={control}
      name='email'
      render={( {field: { onChange, onBlur, value }} ) => (
        <TextInput 
            style = { styles.textInput }
            placeholder = 'Email'
            underlineColorAndroid = 'transparent'
            onChangeText = {onChange}
            onBlur = {onBlur}
            value = {value}
            autoCapitalize = 'none'
        />
      )}
    />
    </View>
    {errors.email && <Text style = { styles.labelError }>{errors.email?.message}</Text>}
      
    <View style = { styles.viewInput }>
      <Image
        style = { styles.icon }
        source = { require('../../images/senha.png') }
      />
    <Controller
      control={control}
      name='senha'
      render={( {field: { onChange, onBlur, value }} ) => (
        <TextInput 
            style = { styles.textInput }
            placeholder = 'Senha'
            underlineColorAndroid = 'transparent'
            onChangeText = {onChange}
            onBlur = {onBlur}
            value = {value}
            autoCapitalize = 'none'
            secureTextEntry = {true}
        />
      )}
    />
    </View>
    {errors.senha && <Text style = { styles.labelError }>{errors.senha?.message}</Text>}
  </KeyboardAvoidingView>
    
    <TouchableOpacity style = { styles.salvarBtn } onPress = {handleSubmit(handleNewAccount)}>
      <Text style = { styles.salvarText }>
        Salvar
      </Text>
    </TouchableOpacity>
   </View>
  );
}