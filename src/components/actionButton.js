import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function ActionButton({ title, onPress, buttonStyle, textStyle }) {
  return (
    <View style={{ margin: 15 }}>
      <TouchableOpacity style={buttonStyle} onPress={onPress} activeOpacity={0.5}>
        <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
