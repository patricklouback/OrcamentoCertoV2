import { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Modal, Image, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

import { getAuth, updateProfile } from "firebase/auth";

import { Camera, CameraType } from 'expo-camera';

export default function TelaCamera({ navigation }) {

    const route = useRoute();
    const { uid } = route.params;

    const camRef = useRef(null);

    const [open, setOpen] = useState(false);
    const [capturedPhoto, setCapturedPhoto] = useState(null);

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.front);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    async function takePicture() {
        if (camRef) {
            const data = await camRef.current.takePictureAsync();
            setCapturedPhoto(data.uri);
            setOpen(true);
            console.log(data);
        }
    }

    function abreTelaHome() {
        setOpen(false)
        navigation.navigate('rotaApp', { uid: uid });
    }

    const SalvarUser = async () => {
        const auth = getAuth();

        updateProfile(auth.currentUser, {
            photoURL: capturedPhoto
        }).then(() => {
            console.log('Deu Certo!')
            abreTelaHome();
        }).catch((error) => {
            console.log('Deu Errado!')
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Camera style={styles.camera} type={type} ref={camRef} >
            </Camera>
            <View style={styles.buttonsView}>
                <TouchableOpacity onPress={abreTelaHome}>
                <MaterialCommunityIcons name='close-circle' size={50} color='#1E1E1E' />
                </TouchableOpacity>
            </View>

            <View style={styles.documentView}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.documentTopLeft}></View>
                    <View style={styles.documentTopRight}></View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.documentBottomLeft}></View>
                    <View style={styles.documentBottomRight}></View>
                </View>

            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={takePicture}>
            </TouchableOpacity>
            {capturedPhoto &&
                <Modal
                    animationType='slide'
                    transparent={false}
                    visible={open}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
                        <View style={{flexDirection: 'row', width: '80%', justifyContent: 'space-between'}}>
                            <TouchableOpacity style={{ margin: 10 }} onPress={SalvarUser}>
                                <MaterialIcons name='save-alt' size={50} color='black' />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ margin: 10 }} onPress={() => { setOpen(false) }}>
                                <MaterialIcons name='close' size={50} color='red' />
                            </TouchableOpacity>
                        </View>
                        <Image
                            style={{ width: 350, height: 531, borderRadius: 20 }}
                            source={{ uri: capturedPhoto }}
                        />
                    </View>

                </Modal>
            }

        </SafeAreaView>
    );
}