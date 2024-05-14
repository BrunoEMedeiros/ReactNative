import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#A7ACD9',
    },
    container:{
        
        padding: 22
    },
    titulo: {
        marginTop: 50,
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
        marginTop: 10,
        marginBottom: 10
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
    },
    body:{
        padding: 20
    },
    texto_lista_vazia:{
        fontSize:25,
        fontWeight: 'bold',
        color: '#fff'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        //backgroundColor: 'rgba(0, 0, 0, 0.2)'
      },
      modalView: {
        gap: 15,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      input_editar: {
        backgroundColor: '#BFC4D9',
        width: 200,
        height: 50,
        padding: 15,
        borderRadius: 15,
        fontSize: 20
      },
      button: {
        height: 50,
        width: 80,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center'
      },
      buttonSave: {
        backgroundColor: '#337357',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20
      },
})