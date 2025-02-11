import {Text, View, StyleSheet} from 'react-native'; //import component react-native

const App = () => {
  //buat fungsi return jsx
  return (
    <View>
      <View style={Styles.container}>
        <Text style={Styles.title}>Basic React Native</Text>
      </View>

      <View style={Styles.container2}>
        <Text style={Styles.text1}>Core Component in react native</Text>
      </View>
    </View>
  );
};

export default App; //export component

//styling
const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 3,
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '300',
    color: '#fff',
    textAlign: 'center',
  },

  container2: {
    padding: 10,
  },

  text1: {
    fontSize: 15,
    textAlign: 'center',
  },
});
