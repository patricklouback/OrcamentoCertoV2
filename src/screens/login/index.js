import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase';

import styles from './styles';

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Feather } from "@expo/vector-icons";

const schema = yup.object({
  email: yup.string().required('Informe seu email'),
  senha: yup.string().min(6, 'A senha deve conter pelo menos 6 dígitos').required('Informe sua senha')
})

export default function Login({ navigation }) {

  const [uid, setUid] = useState('');
  const [verificado, setVerificado] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);
  const [EMAIL, setEMAIL] = useState(null);
  const [SENHA, setSENHA] = useState(null);
  const [focusEmail, setFocusEmail] = useState(false)
  const [focusSenha, setFocusSenha] = useState(false)
  const [mostrarSenha, setMostrarSenha] = useState(false)

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })

  useEffect(()=>{
    AsyncStorage.getItem('email').then((email)=>{
      console.log('email: ' + email)
      setEMAIL(email);
    })
    AsyncStorage.getItem('senha').then((senha)=>{
      console.log('senha: ' + senha)
      setSENHA(senha);
    })

  })

    useEffect(()=>{
    if(EMAIL != null && SENHA != null) {
      firstLogin();
    }
    
    
    async function firstLogin() {
      setLoadingVisible(true);
      signInWithEmailAndPassword(auth, EMAIL, SENHA)
        .then((userCredential) => {
          // Signed in
          const uid = userCredential.user.uid;
          const emailVerificado = userCredential.user.emailVerified;
          setUid(uid);
          setVerificado(emailVerificado);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setLoadingVisible(false);
          alert(errorMessage)
        });
      }
  },[EMAIL, SENHA])  

  useEffect(() => {
    if (uid == '') {
      return
    } else if (verificado == false) {
      alert('Verifique seu E-mail!');
    } else {
      setLoadingVisible(false);
      abreTelaHome();
    }
  }, [verificado])

  const login = data => {
    setLoadingVisible(true);
    signInWithEmailAndPassword(auth, data.email.trim(), data.senha)
      .then((userCredential) => {
        // Signed in
        const uid = userCredential.user.uid;
        const emailVerificado = userCredential.user.emailVerified;
        setUid(uid);
        setVerificado(emailVerificado);
        AsyncStorage.setItem("email", data.email.trim())
        AsyncStorage.setItem("senha", data.senha)
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoadingVisible(false);
        alert(errorMessage)
      });
  }

  function abreTelaRedefinirSenha() {
    setLoadingVisible(false);
    reset();
    navigation.navigate('redefinirSenha');
  }

  function abreTelaCadastro() {
    setLoadingVisible(false);
    reset();
    navigation.navigate('cadastro');
  }

  function abreTelaHome() {
    setLoadingVisible(false);
    reset();
    navigation.navigate('rotaApp', { uid: uid });
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <View style={styles.container}>

        <Image
          style={styles.logo}
          source={require('../../images/logo.png')}
        />

        <View style={[styles.viewInput, {borderColor: focusEmail ? "#BF996F" : "#DCDCDC"}]}>
          <Image
            style={styles.icon}
            source={require('../../images/email.png')}
          />

          <Controller
            control={control}
            name='email'
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.textInput}
                placeholder='username@email.com'
                underlineColorAndroid='transparent'
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                autoCapitalize='none'
                onFocus={()=>{setFocusEmail(true)}}
                onEndEditing={()=>{setFocusEmail(false)}}
              />
            )}
          />
        </View>
        {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}


        <View style={[styles.viewInput, {borderColor: focusSenha ? "#BF996F" : "#DCDCDC"}]}>
          <Image
            style={styles.icon}
            source={require('../../images/senha.png')}
          />
          <Controller
            control={control}
            name='senha'
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.textInput}
                placeholder="*********"
                underlineColorAndroid='transparent'
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                autoCapitalize='none'
                secureTextEntry={!mostrarSenha}
                onFocus={()=>{setFocusSenha(true)}}
                onEndEditing={()=>{setFocusSenha(false)}}
              />
            )}
          />
          <TouchableOpacity onPress={()=>{setMostrarSenha(!mostrarSenha)}}>
          <Feather 
          name= {mostrarSenha ? "eye-off" : "eye"} 
          size={23}
          color={"#BF996F"}
          style={{alignSelf: 'center'}}
          />
          </TouchableOpacity>
        </View>
        {errors.senha && <Text style={styles.labelError}>{errors.senha?.message}</Text>}

        <View style={styles.viewEsqueci}>
          <TouchableOpacity style={styles.esqueciSenhaBtn} onPress={abreTelaRedefinirSenha}>
            <Text style={styles.esqueciSenhaText}>
              esqueceu a senha?
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit(login)}>
          <Text style={styles.loginText}>
            Entrar
          </Text>
        </TouchableOpacity>

        <View style={styles.loading}>
          <ActivityIndicator
            size="large"
            color="#BF996F"
            animating={loadingVisible}
          />
        </View>

        <View style={styles.viewCadastreSe}>
          <Text style={styles.naoTemContaText}>Ainda não tem uma conta? </Text>
          <TouchableOpacity style={styles.cadastreSeBtn} onPress={abreTelaCadastro}>
            <Text style={styles.cadastreSeText}>
              Cadastre-se aqui
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </TouchableWithoutFeedback>
  );
}