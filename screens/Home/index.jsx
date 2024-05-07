import { View, Text, TextInput, 
    TouchableOpacity, FlatList, 
    SafeAreaView, Alert, 
    Modal, Pressable} from "react-native"

import { estilo } from "./styles"
import Card from "../../components/Card"
import { useState } from "react"

export default function Home(){

    const [alunos, setAlunos] = useState([])
    const [texto, setTexto] = useState('')

    const [modalVisible, setModalVisible] = useState(false);

    function handleAluno()
    {
      if(alunos.includes(texto)){
        return Alert.alert('Ops...','Aluno(a) ja cadastrado!',
        [ {text: 'Ok'} ] )
      }
      setAlunos(prevState => [...prevState,texto])
    }

    function abrirModal(){
        setModalVisible(!modalVisible)
    }

    function deleteAluno(nome)
    {
        return Alert.alert('Excluir',
        `Deseja excluir o aluno(a) ${nome}`,
            [
                { 
                    text: 'Sim',
                    onPress: () => 
                    setAlunos(prevState => 
                        prevState.filter(alunos => alunos != nome))
                },
                {
                    text: 'Não'
                }
            ]
        )
    }
 

    return(
        <View style={estilo.tela}>
            <View style={estilo.container}>
                <Text style={estilo.titulo}>Lista de presença</Text>
                <Text style={estilo.sub_titulo}>12, de março de 2024</Text>
                <View style={estilo.form}>
                    <TextInput
                        style={estilo.input_text}
                        placeholder="Digite o nome..."
                        onChangeText={text => setTexto(text)}
                    />
                    <TouchableOpacity 
                        style={estilo.botao}
                        onPress={handleAluno}
                    >
                        <Text style={estilo.texto_botao}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <SafeAreaView style={{flex: 1, padding: 22}}>
                <FlatList 
                    data={alunos}
                    keyExtractor={item => item}
                    renderItem={({item}) =>(
                        <Card 
                            key={item} 
                            name={item} 
                            abrirModal={abrirModal}
                            deletarAluno={deleteAluno} 
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={
                        <Text style={estilo.texto_lista_vazia}>
                            Nenhum aluno adicionado...
                        </Text>
                    }
                />
            </SafeAreaView>
            <View style={estilo.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                    }}>
                    <View style={estilo.centeredView}>
                    <View style={estilo.modalView}>
                        <Text style={estilo.modalText}>Hello World!</Text>
                        <Pressable
                        style={[estilo.button, estilo.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={estilo.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                    </View>
                </Modal>
                </View>
        </View>
    )
}