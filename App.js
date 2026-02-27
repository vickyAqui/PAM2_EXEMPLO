// IMPORTAÇÃO
import {useState} from 'react';
import {Text,View} from 'react-native';
import InputButton from './src/components/inputButton';
import ActionButton from './src/components/actionButton';
import ResultView from './src/components/resultView';
import styles from './src/styles/appStyles';

export default function Aplicacao(){

  const [n1,setN1] = useState('')
  const [n2,setN2] = useState('')
  const [resultado,setResultado] = useState('')

  const somar = ()=>{
    const r = (parseInt(n1, 10) || 0) + (parseInt(n2, 10) || 0)
    setResultado(r)
  }
    
  return(
    <View style={styles.tudo}>

      <View>
        <Text style={styles.titulo}> Somando dois Valores </Text>
      </View>

      <InputButton
        label="Primeiro número:"
        placeholder="Digite aqui o primeiro número"
        value={n1}
        autoFocus={true}
        onChangeText={setN1}
        inputStyle={styles.caixaDeTexto}
      />

      <InputButton
        label="Segundo número:"
        placeholder="Digite aqui o segundo número"
        value={n2}
        onChangeText={setN2}
        inputStyle={styles.caixaDeTexto}
      />

      <ActionButton
        title="Somar"
        onPress={somar}
        buttonStyle={styles.botao}
        textStyle={styles.textoBotao}
      />

      <ResultView value={resultado} textStyle={styles.resposta} />
      
    </View>
);
}
