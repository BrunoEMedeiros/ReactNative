import { View, Text, Pressable } from "react-native";
import { estilo } from "./styles";
import { Icon } from 'react-native-elements'

export default function Card({ name, abrirModal, deletarAluno}){
    return(
        <View style={estilo.container}>
            <Text style={estilo.texto}>
               {name}
            </Text>
            <Pressable
                style={estilo.botao_editar}
                onPress={()=> abrirModal(name)}
            >
                <Icon 
                    name='edit'
                    type='material'
                    color='#fff'
                />
            </Pressable>

            <Pressable 
                style={estilo.botao}
                onPress={()=> deletarAluno(name)}
            >
                <Icon 
                    name='delete'
                    type='material'
                    color='#fff'
                />
            </Pressable>
        </View>
    )
}