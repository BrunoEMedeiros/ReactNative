import { View, Text, TextInput, TouchableOpacity, FlatList, SafeAreaView } from "react-native"
import { estilo } from "./styles"
import Card from "../../components/Card"

export default function Home(){

    const lista = ['aline','bruno','andre',
    'maria','joao','amanda','gabriele',
    'vinicius','gabriel','vanessa','luana', 'josé',
    'leonardo']

    /*
    Nota:
    O componente <Cabecalho /> não foi apagado do projeto, apenas
    foi retirado da tela <Home /> pois não é necessario no momento
    */
    return(
        <View style={estilo.tela}>
            <View style={estilo.container}>
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
            <SafeAreaView style={{flex: 1, padding: 22}}>
                <FlatList 
                    data={lista}
                    keyExtractor={item => item}
                    renderItem={({item}) =>(
                        <Card key={item} name={item} />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </SafeAreaView>
        </View>
    )
}