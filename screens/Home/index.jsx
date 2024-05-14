import { View, Text, TextInput, 
    Pressable, FlatList, 
    SafeAreaView, Alert, 
    Modal} from "react-native"

import { estilo } from "./styles"
import Card from "../../components/Card"
import { useState } from "react"

export default function Home(){

    const [alunos, setAlunos] = useState([])
    const [texto, setTexto] = useState('')

    const [novoNomeEditar, setNovoNomeEditar] = useState('')
    const [modalVisible, setModalVisible] = useState(false);

    function handleAluno()
    {
      if(alunos.includes(texto)){
        return Alert.alert('Ops...','Aluno(a) ja cadastrado!',
        [ {text: 'Ok'} ] )
      }
      setAlunos(prevState => [...prevState,texto])
    }

    function abrirModal(nome){
        setTexto(nome)
        setModalVisible(!modalVisible)
    }

    function editAluno(nomeAntigo, nomeNovo){
        if(alunos.includes(nomeNovo))
        {
            return Alert.alert('Ops...','Aluno(a) ja cadastrado!',
            [ {text: 'Ok'} ] )
        }
        let nova_lista = [...alunos]
        let indice = nova_lista.indexOf(nomeAntigo)
        nova_lista.splice(indice, 1, nomeNovo)
        setAlunos(nova_lista)
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
                    <Pressable 
                        style={estilo.botao}
                        onPress={handleAluno}
                    >
                        <Text style={estilo.texto_botao}>
                            +
                        </Text>
                    </Pressable>
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
                        <Text style={estilo.modalText}>Deseja alterar o aluno(a) ?</Text>
                        <TextInput 
                            style={estilo.input_editar}
                            placeholder={texto}
                            onChangeText={text => setNovoNomeEditar(text)}
                        />
                        <View style={{flexDirection: 'row', gap: 10}}>
                        <Pressable
                            style={[estilo.button, estilo.buttonSave]}
                            onPress={() => editAluno(texto, novoNomeEditar)}
                        >
                            <Text style={estilo.textStyle}>Salvar</Text>
                        </Pressable>
                        <Pressable
                            style={[estilo.button, estilo.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={estilo.textStyle}>Cancelar</Text>
                        </Pressable>
                        </View>
                    </View>
                    </View>
                </Modal>
                </View>
        </View>
    )
}