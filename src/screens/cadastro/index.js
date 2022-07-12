import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import styles from './styles';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  nome: yup.string().required('Informe seu nome completo'),
  email: yup.string().required('Informe seu email'),
  senha: yup.string().min(6, 'A senha deve conter pelo menos 6 dígitos').required('Informe sua senha')
})

export default function Cadastro({navigation}) {

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  function abreTelaHome(){
    navigation.navigate('home');
  }

  function handleNewAccount(){

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
        source = { require('../../images/user.png') }
      />
    <Controller
      control={control}
      name='nome'
      render={( {field: { onChange, onBlur, value }} ) => (
        <TextInput 
            style = { styles.textInput }
            placeholder = 'Nome Completo'
            underlineColorAndroid = 'transparent'
            onChangeText = {onChange}
            onBlur = {onBlur}
            value = {value}
        />
      )}
    />
    </View>
    {errors.nome && <Text style = { styles.labelError }>{errors.nome?.message}</Text>}
    
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
    
    <TouchableOpacity style = { styles.salvarBtn } onPress = {handleNewAccount}>
      <Text style = { styles.salvarText }>
        Salvar
      </Text>
    </TouchableOpacity>
   </View>
  );
}