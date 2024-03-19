import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { estilo } from "./styles"

export default function Home(){
    return(
        <View style={estilo.tela}>
            <Text style={estilo.titulo}>Lista de presença</Text>
            <Text style={estilo.sub_titulo}>12, de março de 2024</Text>
            <View style={estilo.form}>
                <TextInput
                    style={estilo.input_text}
                />
                <TouchableOpacity style={estilo.botao}>
                    <Text style={estilo.texto_botao}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}