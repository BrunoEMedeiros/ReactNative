import { View, Text, TouchableOpacity } from "react-native";
import { estilo } from "./styles";
import { Icon } from 'react-native-elements'

export default function Card({ name, abrirModal, deletarAluno}){
    return(
        <View style={estilo.container}>
            <Text style={estilo.texto}>
               {name}
            </Text>
            <TouchableOpacity 
                style={estilo.botao_editar}
                onPress={()=> abrirModal()}
            >
                <Icon 
                    name='edit'
                    type='material'
                    color='#fff'
                />
            </TouchableOpacity>

            <TouchableOpacity 
                style={estilo.botao}
                onPress={()=> deletarAluno(name)}
            >
                <Icon 
                    name='delete'
                    type='material'
                    color='#fff'
                />
            </TouchableOpacity>
        </View>
    )
}