import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    FlatList,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback,
    Modal,
    Pressable,
    Alert
} from 'react-native';
import { useRoute } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';
import { getFirestore, getDocs, collection, deleteDoc, doc, setDoc }  from 'firebase/firestore';
import styles from './styles';

export default function Produtos({ navigation }) {
    const route = useRoute();
    const { uid } = route.params;

    const [produtos, setProdutos] = useState([])
    const [atualize, setAtualize] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);

    const [deletado, setDeletado] = useState(false);
    const [deletSave, setDeletsave] = useState(false);

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [margem, setMargem] = useState(2.4);
    const [valorFinal, setValorFinal] = useState('');
    const [custo, setCusto] = useState('');
    const [nomeOLD, setNomeOLD] = useState('');

    useEffect(() => {
        LerProduct();
    },[])

    useEffect(() => {
        if (atualize) {
            LerProduct();
        }
    }, [atualize])

    useEffect(()=>{

        if (!deletado && deletSave) {
            saveProduct();
        }

    }, [deletado, deletSave])

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
                margem: doc.data().margem,
                descricao: doc.data().descricao,
                uid: doc.data().uid,
            };
            prod.unshift(product);
        });

        setProdutos(prod);
        setAtualize(false);
    }

    const deleteProduct = () => {
        setAtualize(false);
        setModalVisible(false);
        setDeletado(false);

        const firestore = getFirestore();
        var UID = uid.trim();
        var name = nomeOLD.trim();

        const docData = {
            nome: nome,
            descricao: descricao,
            custo: custo,
            valorFinal: valorFinal,
            margem: margem,
            uid: uid
        };

        deleteDoc(doc(firestore, UID, name))
            .then(setDeletado(true));

    }

    const deletSaveProduct = () => {
        setAtualize(false);
        setModalVisible(false);
        setDeletsave(false);

        const firestore = getFirestore();
        var UID = uid.trim();
        var name = nomeOLD.trim();

        const docData = {
            nome: nome,
            descricao: descricao,
            custo: custo,
            valorFinal: valorFinal,
            margem: margem,
            uid: uid
        };

        deleteDoc(doc(firestore, UID, name))
            .then(setDeletsave(true));

    }

    const saveProduct = () => {
        setAtualize(false);
        setModalVisible(false);

        const firestore = getFirestore();
        var UID = uid.trim();
        var name = nome.trim();

        const docData = {
            nome: nome,
            descricao: descricao,
            custo: custo,
            valorFinal: valorFinal,
            margem: margem,
            uid: uid
        };

        setDoc(doc(firestore, UID, name), docData)
            .then(Alert.alert('Sucesso!', 'Produto salvo com sucesso!'));

    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

            <View style={styles.container}>
                <View style={styles.viewLogo}>
                    <TouchableOpacity style={styles.reload} onPress={() => { setAtualize(true) }}>
                        <Text style={[styles.titleFlat, { fontSize: 15 }]}>Atualizar Lista</Text>
                    </TouchableOpacity>
                    <Image
                        style={styles.logo}
                        source={require('../../images/logo-fundo.png')}
                    />
                </View>

                <FlatList
                    ListHeaderComponent={() => {
                        return (
                            <View style={styles.flatHeader}>
                                <Text style={styles.titleHead}>Lista de Produtos</Text>
                            </View>
                        );
                    }}

                    ItemSeparatorComponent={() => {
                        return (
                            <View style={{ height: 7, width: '100%', backgroundColor: '#FFF' }} />
                        );
                    }}
                    showsHorizontalScrollIndicator={false}
                    data={produtos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => {
                            setNome(item.nome)
                            setNomeOLD(item.nome)
                            setDescricao(item.descricao)
                            setValorFinal(item.valorFinal)
                            setCusto(item.custo)
                            setMargem(item.margem)
                            setModalVisible(true)
                        }}>

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
                                        <Text numberOfLines={5} style={[styles.descriptionFlat, { width: '72%' }]}>{item.descricao}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                />



                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity style={styles.closeModal} onPress={() => { setModalVisible(false) }}>
                                <AntDesign name="close" size={30} color="#BF996F" />
                            </TouchableOpacity>
                            <Text style={[styles.modalText, { fontSize: 20, marginBottom: '4%' }]}>Edite seu Produto</Text>
                            <Text style={styles.modalText}>Nome do Produto: </Text>
                            <TextInput
                                style={styles.textInputNomeModal}
                                placeholder='Nome do Produto'
                                underlineColorAndroid='transparent'
                                onChangeText={setNome}
                                value={nome}
                            />

                            <Text style={styles.modalText}>Descrição do Produto: </Text>
                            <TextInput
                                style={styles.textInputDescricaoModal}
                                placeholder='Descrição do Produto'
                                underlineColorAndroid='transparent'
                                onChangeText={setDescricao}
                                value={descricao}
                                multiline={true}
                            />
                            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Pressable
                                style={styles.button}
                                onPress={deleteProduct}>
                                <Text style={styles.textStyle}>Excluir</Text>
                            </Pressable>
                            <Pressable
                                style={styles.button}
                                onPress={deletSaveProduct}>
                                <Text style={styles.textStyle}>Salvar</Text>
                            </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>



        </TouchableWithoutFeedback>
    );
}