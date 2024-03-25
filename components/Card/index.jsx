import { View, Text, TouchableOpacity } from "react-native";
import { estilo } from "./styles";

export default function Card({ name }){
    return(
        <View style={estilo.container}>
            <Text style={estilo.texto}>
               {name}
            </Text>
            <TouchableOpacity style={estilo.botao}>
                <Text style={estilo.texto_botao}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}