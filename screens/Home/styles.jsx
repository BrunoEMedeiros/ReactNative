import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#A7ACD9',
        padding: 22
    },
    titulo: {
        marginTop: 40,
        fontSize: 36,
        fontWeight: 'bold'
    },
    sub_titulo:{
        fontSize: 22,
        color: '#545DB6' 
    },
    form: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 56,
        marginBottom: 30
    },
    input_text: {
        flex: 1,
        height: 80,
        color: '#FFF',
        fontSize: 26,
        padding: 12,
        borderRadius: 10,
        backgroundColor: '#545DB6'
    },
    botao:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 68,
        borderRadius: 10,
        fontSize: 50,
        backgroundColor: '#4DDA86',
        marginLeft: 16
    },
    texto_botao: {
        fontSize: 30
    }
})