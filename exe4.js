import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

const exercise4 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redcontainer}>
        <View style={styles.blackcontainer} />
        <View style={styles.yellowcontainer} />
        <View style={styles.blackcontainer} />
      </View>
      <View style={styles.whitecontainer}>
        <Image
          style={styles.logo}
          source={require('./assets/logo-with-motto-3.png')}
        />
      </View>
      <View style={styles.bluecontainer}>
        <View style={styles.blackcontainer} />
        <View style={styles.yellowcontainer} />
        <View style={styles.blackcontainer} />
      </View>
    </View>
  );
};

export default exercise4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // //flex direction = atur urutan letak
    // flexDirection: 'column', //urutan flexbox (bisa reverse)
    // justifyContent: 'space-between', //main axis, tanpa merubah urutan flexbox
    // alignItems: 'center', //cross axis
  },
  redcontainer: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row', //urutan flexbox (bisa reverse)
    justifyContent: 'flex-start', //main axis, tanpa merubah urutan flexbox
    alignItems: 'center',
    padding: 10,
    gap: 20,
  },
  whitecontainer: {
    flex: 4,
    backgroundColor: 'white',
    justifyContent: 'center', // Posisi vertikal di tengah
    alignItems: 'center', // Posisi horizontal di tengah
  },
  bluecontainer: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'row', //urutan flexbox (bisa reverse)
    justifyContent: 'space-around', //main axis, tanpa merubah urutan flexbox
    alignItems: 'center',
  },
  logo: {
    height: 90,
    width: 400,
  },
  blackcontainer: {
    backgroundColor: 'black',
    height: 80,
    width: 80,
  },
  yellowcontainer: {
    backgroundColor: 'yellow',
    height: 80,
    width: 80,
  },
});
