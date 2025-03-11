import React from 'react';
import {Text, View, StyleSheet} from 'react-native'; //import component react-native

const Tittle = ({judul = 'Welcome'}) => {
  //buat fungsi return jsx
  return (
    <View>
      <Text style={styles.title}>{judul}</Text>
    </View>
  );
};

export default Tittle;

const styles = StyleSheet.create({
  title: {
    textAlign: 'left',
    padding: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
