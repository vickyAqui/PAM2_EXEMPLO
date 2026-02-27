import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default function InputButton({
  label,
  placeholder,
  value,
  onChangeText,
  inputStyle,
  autoFocus = false,
}) {
  return (
    <View style={{ margin: 15 }}>
      <Text>{label}</Text>
      <TextInput
        style={inputStyle}
        placeholder={placeholder}
        placeholderTextColor="#6f6f6f"
        autoFocus={autoFocus}
        keyboardType="numeric"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}