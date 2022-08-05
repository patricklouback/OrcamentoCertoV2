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

export default function Produtos({ navigation }) {
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

                <FlatList
                    ListHeaderComponent={() => {
                        return (
                            <View style={{ width: '100%', height: 70, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.titleHead}>Lista de Produtos</Text>
                            </View>
                        );
                    }}

                    ItemSeparatorComponent={() => {
                        return (
                            <View style={{ height: 5, width: '100%', backgroundColor: '#FFF' }} />
                        );
                    }}
                    showsHorizontalScrollIndicator={false}
                    data={produtos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <View style={styles.containerFlat}>
                            <View style={styles.contentFlat}>
                                <View style={styles.viewRow}>
                                    <Text style={styles.titleFlat}>Nome do Produto: </Text>
                                    <Text style={styles.descriptionFlat}>{item.nome}</Text>
                                </View>
                                <View style={styles.viewRow}>
                                    <Text style={styles.titleFlat}>Valor: </Text>
                                    <Text style={styles.descriptionFlat}>R$ {item.valorFinal}</Text>
                                </View>
                                <View style={styles.viewRow}>
                                    <Text style={styles.titleFlat}>Custo: </Text>
                                    <Text style={styles.descriptionFlat}>R$ {item.custo}</Text>
                                </View>
                                <View style={styles.viewRow}>
                                    <Text numberOfLines={5} style={styles.titleFlat}>Descrição: </Text>
                                    <Text numberOfLines={5} style={styles.descriptionFlat}>{item.descricao}</Text>
                                </View>
                            </View>
                        </View>
                    }
                />

                <View style={styles.viewInferior}></View>
            </View>

        </TouchableWithoutFeedback>
    );
}