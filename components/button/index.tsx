import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({label, color = 'black', onPress}) => {
  return (
    <View>
      <TouchableOpacity style={Styles.btn(color)} onPress={onPress}>
        <Text style={Styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const Styles = StyleSheet.create({
  btn: color => ({
    backgroundColor: color,
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    margin: 5,
    padding: 15,
    borderRadius: 50,
  }),
  buttonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});
