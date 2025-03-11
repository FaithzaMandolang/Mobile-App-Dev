import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native'; //import component react-native
import Input from './components/input';
import Button from './components/button';
import Tittle from './components/title';

const regist = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  const onSubmit = () => {
    console.log(
      'username :',
      username,
      '\nPassword :',
      password,
      '\nEmail :',
      email,
      '\nAddress :',
      address,
      '\nPhone Number :',
      phonenumber,
    );
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
      <Input
        label="Email"
        placeholder="Masukan email anda"
        onChangeText={e => setEmail(e)}
      />
      <Input
        label="Address"
        placeholder="Masukan alamat anda"
        onChangeText={e => setAddress(e)}
      />
      <Input
        label="Phone Number"
        placeholder="Masukan nomor telepon anda"
        keyboardType="numeric"
        onChangeText={e => setPhonenumber(e.replace(/[^0-9]/g, ''))}
        value={phonenumber}
      />
      <Button label="Sign In" color="purple" onPress={onSubmit} />
    </View>
  );
};

export default regist;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
