
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#DE3F57',
        padding: 15
    },
    componentes: {
        marginTop: 80,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imagem: {
        resizeMode: 'cover',
        height: 100,
        width: 100,
        borderRadius: 50
    },
    campo_pesquisa:{
        flex: 1,
        padding: 15,
        fontSize: 16,
        color: '#fff',
        backgroundColor: '#E77385',
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10
    },
    botao_pesquisa:{
        width: 56,
        height: 56,
        backgroundColor: '#8F0007',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icone_lupa:{
        width: 30,
        height: 30,
    }
})

export default styles