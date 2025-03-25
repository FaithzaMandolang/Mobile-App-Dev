import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native'; //import component react-native
// import Input from './components/input';
// import Button from './components/button';
// import Tittle from './components/title';
import axios from 'axios';

const restAPI = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      setUsers(res.data);
      console.log(res.data);
    });
  }, []);
  //buat fungsi return jsx
  return (
    <View>
      <Text>RestAPI</Text>
      {users.map(item => (
        <Text styles={{fontSize: 20}}>{item.username}</Text>
      ))}
    </View>
  );
};

export default restAPI;

const styles = StyleSheet.create({});
