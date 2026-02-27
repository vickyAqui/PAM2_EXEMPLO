import React from 'react';
import { Text, View } from 'react-native';

export default function ResultView({ value, textStyle }) {
  return (
    <View style={{ margin: 15 }}>
      <Text style={textStyle}>Total da soma: {value}</Text>
    </View>
  );
}
