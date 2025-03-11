import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native'; //import component react-native
import Input from './components/input';
import Button from './components/button';
import Tittle from './components/title';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log(username, password);
  };
  //buat fungsi return jsx
  return (
    <View style={styles.container}>
      <Tittle judul="Selamat Datang" />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={e => setUsername(e)}
      />
      <Input
        label="Password"
        placeholder="Masukan password anda"
        onChangeText={e => setPassword(e)}
        secureTextEntry={true}
      />
      <Button label="Sign In" color="orange" onPress={onSubmit} />
      <Button label="Sign In with Google" color="red" onPress={onSubmit} />
      <Button label="Sign In with Facebook" color="blue" onPress={onSubmit} />
      <Button label="Sign In with Apple" color="black" onPress={onSubmit} />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
