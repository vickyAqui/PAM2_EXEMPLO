import React from 'react';
import { Text, View } from 'react-native';

export default function ResultView({ value, textStyle }) {
  if (!value) {
    return null;
  }

  return (
    <View style={{ margin: 15 }}>
      <Text style={textStyle}>Soma: {value.soma}</Text>
      <Text style={textStyle}>Subtração: {value.subtracao}</Text>
      <Text style={textStyle}>Multiplicação: {value.multiplicacao}</Text>
      <Text style={textStyle}>Divisão: {value.divisao}</Text>
    </View>
  );
}
