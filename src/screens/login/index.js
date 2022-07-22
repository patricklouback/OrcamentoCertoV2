import React, {useEffect, useState} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase';

import styles from './styles';

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().required('Informe seu email'),
  senha: yup.string().min(6, 'A senha deve conter pelo menos 6 dígitos').required('Informe sua senha')
})

export default function Login({navigation}) {

  const [uid, setUid] = useState('');
  const [logado, setLogado] = useState(false);

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })

  useEffect(()=>{
    reset();
  },[])

  useEffect(()=>{
    reset();
    if (uid == '') {
      return
    } else if (logado == false) {
      alert('Verifique seu E-mail!')
    } else {
      abreTelaHome();
    }
  },[uid, logado])

  const login = data => {
    signInWithEmailAndPassword(auth, data.email.trim(), data.senha)
    .then((userCredential) => {
    // Signed in
    const uid = userCredential.user.uid;
    const emailVerificado = userCredential.user.emailVerified;
    setUid(uid);
    setLogado(emailVerificado);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    });
  }

  function abreTelaCadastro(){
    reset();
    navigation.navigate('cadastro');
  }
  function abreTelaHome(){
    reset();
    navigation.navigate('home', {uid: uid});
  }


 return (
   <View style = { styles.container }>
    
    <Image
      style = { styles.logo }
      source= { require('../../images/logo.png') }
    />

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
    
    <View style = { styles.viewEsqueci }>
      <TouchableOpacity style = { styles.esqueciSenhaBtn }>
        <Text style = { styles.esqueciSenhaText }>
          esqueceu a senha?
        </Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity style = { styles.loginBtn } onPress = {handleSubmit(login)}>
      <Text style = { styles.loginText }>
        Entrar
      </Text>
    </TouchableOpacity>

    <View style = {  styles.viewCadastreSe }>
      <Text style = { styles.naoTemContaText }>Ainda não tem uma conta? </Text>
      <TouchableOpacity style = { styles.cadastreSeBtn } onPress = {abreTelaCadastro}>
      <Text style = { styles.cadastreSeText }>
        Cadastre-se aqui
      </Text>
    </TouchableOpacity>
    </View>

    


   </View>
  );
}