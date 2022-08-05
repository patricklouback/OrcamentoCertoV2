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

import { AntDesign } from '@expo/vector-icons';
import { getFirestore, getDocs, collection, } from 'firebase/firestore';
import styles from './styles';

export default function Configuracao({ navigation }) {
    const route = useRoute();
    const { uid } = route.params;

    const [produtos, setProdutos] = useState([])
    const [atualize, setAtualize] = useState(false)

    useEffect(() => {
        LerProduct();
    }, [])

    useEffect(()=>{
        if (atualize) {
            LerProduct();
        }
    },[atualize])

    const LerProduct = async () => {

        const firestore = getFirestore();
        var UID = uid;
        const querySnapshot = await getDocs(collection(firestore, UID));

        var prod = [];
        querySnapshot.forEach((doc) => {

            const product = {
                id: doc.id,
                nome: doc.data().nome,
                valorFinal: doc.data().valorFinal,
                custo: doc.data().custo,
                descricao: doc.data().descricao,
                uid: doc.data().uid,
            };
            prod.unshift(product);
        });

        setProdutos(prod);
        setAtualize(false);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

            <View style={styles.container}>
                <View style={styles.viewLogo}>
                    <TouchableOpacity style={styles.reload} onPress={()=>{setAtualize(true)}}>
                        <AntDesign
                            name='reload1'
                            size={35}
                            color='#BF996F'
                        />
                    </TouchableOpacity>
                    <Image
                        style={styles.logo}
                        source={require('../../images/logo.png')}
                    />
                </View>

                <View style={styles.viewInferior}></View>
            </View>

        </TouchableWithoutFeedback>
    );
}