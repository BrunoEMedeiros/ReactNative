import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native"
import { estilo } from "./styles"
import Card from "../../components/Card"

export default function Home(){

    const lista = ['teste','bruno','andre',
    'maria','joao','amanda','gabriele',
    'vinicius','gabriel','vanessa','luana']


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
            <FlatList 
                data={lista}
                keyExtractor={item => item}
                renderItem={({item}) =>(
                    <Card key={item} name={item} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}