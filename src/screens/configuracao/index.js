import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';
import { useRoute } from '@react-navigation/native';

import { getAuth, updateProfile } from "firebase/auth";

import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

export default function Configuracao({ navigation }) {
    const route = useRoute();
    const { uid } = route.params;

    const [nome, setNome] = useState(null)
    const [email, setEmail] = useState(null)
    const [avatar, setAvatar] = useState(null)

    useEffect(() => {
        LerUser();
    }, [])

    const SalvarUser = async () => {
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



    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

            <View style={styles.container}>
                <View style={styles.viewLogo}>
                    <TouchableOpacity style={styles.reload} onPress={LerUser}>
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

                <View style={styles.viewInferior}></View>
            </View>

        </TouchableWithoutFeedback>
    );
}