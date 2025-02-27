import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const pertemuan11 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redcontainer} />
      <View style={styles.greencontainer} />
      <View style={styles.bluecontainer} />
    </View>
  );
};

export default pertemuan11;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flex direction = atur urutan letak
    flexDirection: 'column', //urutan flexbox (bisa reverse)
    justifyContent: 'space-between', //main axis, tanpa merubah urutan flexbox
    alignItems: 'center', //cross axis
  },
  redcontainer: {
    //flex: 1,
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  greencontainer: {
    //flex: 1,
    backgroundColor: 'green',
    height: 100,
    width: 100,
  },
  bluecontainer: {
    //flex: 1,
    backgroundColor: 'blue',
    height: 100,
    width: 100,
  },
});
