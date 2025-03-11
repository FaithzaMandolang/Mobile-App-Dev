import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const Input = ({label, placeholder, onChangeText, ...rest}) => {
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        {...rest}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    fontSize: 15,
    padding: 15,
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    paddingLeft: 20,
    paddingBottom: 5,
    paddingTop: 15,
    fontWeight: 'bold',
  },
});
