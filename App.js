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
  const [resultado,setResultado] = useState(null)

  const calcularOperacoes = ()=>{
    const primeiroNumero = parseFloat(n1) || 0
    const segundoNumero = parseFloat(n2) || 0

    setResultado({
      soma: primeiroNumero + segundoNumero,
      subtracao: primeiroNumero - segundoNumero,
      multiplicacao: primeiroNumero * segundoNumero,
      divisao: segundoNumero !== 0 ? primeiroNumero / segundoNumero : 'Não é possível dividir por zero'
    })
  }
    
  return(
    <View style={styles.tudo}>

      <View>
        <Text style={styles.titulo}> Operações Aritméticas </Text>
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
        title="Calcular"
        onPress={calcularOperacoes}
        buttonStyle={styles.botao}
        textStyle={styles.textoBotao}
      />

      <ResultView value={resultado} textStyle={styles.resposta} />
      
    </View>
);
}
