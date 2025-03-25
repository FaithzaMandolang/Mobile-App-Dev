// components/UserCard.js
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const UserCard = ({user}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: user.avatar}} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>
          <Text style={styles.first_name}>{user.first_name}</Text>{' '}
          {user.last_name}
        </Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    borderColor: 'grey',
    borderWidth: 0.5,
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
  info: {
    marginLeft: 10,
  },
  first_name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
  },
  email: {
    fontSize: 14,
    color: 'black',
  },
});

export default UserCard;
