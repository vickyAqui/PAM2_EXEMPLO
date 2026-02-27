import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tudo: {
    backgroundColor: '#000',
    height: '100%',
    width: '100%',
  },

  titulo: {
    color: '#d30f59',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 10,
  },

  caixaDeTexto: {
    borderWidth: 1,
    borderColor: '#2f2f2f',
    color: '#f2f2f2',
    borderRadius: 40,
    paddingLeft: 25,
    height: 60,
  },

  botao: {
    backgroundColor: '#d30f33ff',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontSize: 18,
  },

  resposta: {
    color: '#d30f59',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 30,
  },
});

export default styles;
