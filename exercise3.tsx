import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'; //import component react-native

const exercise3 = () => {
  //buat fungsi return jsx
  return (
    <View>
      <View>
        <Text style={Styles.title}>Welcome</Text>
      </View>

      <View>
        <Text style={Styles.text}>Username</Text>
      </View>

      <TextInput style={Styles.input} placeholder="Masukan username anda" />

      <View>
        <Text style={Styles.text}>Password</Text>
      </View>

      <TextInput style={Styles.input} placeholder="Masukan password anda" />

      <TouchableOpacity style={Styles.btn} activeOpacity={0.5}>
        <Text style={Styles.buttontext}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default exercise3;

const Styles = StyleSheet.create({
  title: {
    textAlign: 'left',
    padding: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },

  text: {
    fontSize: 18,
    paddingLeft: 20,
    paddingBottom: 5,
    paddingTop: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: 'grey',
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    fontSize: 15,
    padding: 15,
  },

  btn: {
    backgroundColor: 'orange',
    height: 50,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 50,
    padding: 13,
    borderRadius: 10,
    marginBottom: 5,
  },
  buttontext: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});
