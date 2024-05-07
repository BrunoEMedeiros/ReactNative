import { View, Image, TextInput, Pressable} from "react-native";
import { Icon } from 'react-native-elements'
import styles from "./styles";

export default function Cabecalho(){
    return (
        <View style={styles.container}>
            <View style={styles.componentes}>
                <Image style={styles.imagem}
                    source={require('../../assets/imagem.png')}
                />
                <TextInput
                    style={styles.campo_pesquisa}
                    placeholder="Procure algo..."
                />
                <Pressable style={styles.botao_pesquisa}>
                    <Icon 
                        name="search"
                        type="material"
                        color={'#ffff'}
                    />
                </Pressable>
            </View>
        </View>
    )
}