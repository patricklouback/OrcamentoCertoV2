import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback,
    Modal,
    Pressable
} from 'react-native';
import { useRoute } from '@react-navigation/native';

import { getAuth, updateProfile } from "firebase/auth";

import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

export default function Configuracao({ navigation }) {
    const route = useRoute();
    const { uid } = route.params;

    const [modalVisible, setModalVisible] = useState(false);

    const [nome, setNome] = useState(null)
    const [email, setEmail] = useState(null)
    const [avatar, setAvatar] = useState(null)

    useEffect(() => {
        LerUser();
    }, [])

    const SalvarUser = async () => {
        setModalVisible(!modalVisible);
        const auth = getAuth();

        updateProfile(auth.currentUser, {
            displayName: "Patrick Louback", photoURL: "https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/256/users-icon.png"
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }
    
    const LerUser = async () => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user !== null) {
            user.providerData.forEach((profile) => {
                setNome(profile.displayName);
                setEmail(profile.email);
                setAvatar(profile.photoURL);
            });
        }

    }

    function abreCamera(){
        navigation.navigate('camera')
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

            <View style={styles.container}>
                <View style={styles.viewLogo}>
                    <TouchableOpacity style={styles.reload} onPress={()=>{setModalVisible(!modalVisible)}}>
                        <AntDesign
                            name='edit'
                            size={35}
                            color='#BF996F'
                        />
                    </TouchableOpacity>
                    <Image
                        style={styles.logo}
                        source={require('../../images/logo.png')}
                    />
                </View>

                <Image
                    style={{ width: 200, height: 200 }}
                    source={avatar == null ? require('../../images/user-image.png') : { uri: avatar }}
                />

                <View style={{ flexDirection: 'row', alignSelf: 'flex-start', }}>
                    <Text style={styles.textUser}>Nome: </Text>
                    <Text style={styles.textUser2}>{nome != null ? nome : 'Clique acima para editar seu perfil.'}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'flex-start', }}>
                    <Text style={styles.textUser}>Email: </Text>
                    <Text style={styles.textUser2}>{email}</Text>
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
              <Text style={styles.modalText}>Digite seu Nome: </Text>
                  <TextInput
                    style={styles.textInputNomeModal}
                    placeholder='digite seu nome...'
                    underlineColorAndroid='transparent'
                    onChangeText={(props)=>{setNome(props)}}
                    value={nome}
              />
              
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={SalvarUser}>
                <Text style={styles.textStyle}>Salvar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

                <TouchableOpacity style={styles.btnTirarFoto} onPress={abreCamera}>
                    <Text style={styles.btnText}>Tirar Foto</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSelecionarFoto}>
                    <Text style={styles.btnText}>Selecionar Foto</Text>
                </TouchableOpacity>

            </View>

        </TouchableWithoutFeedback>
    );
}