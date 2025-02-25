import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native'; //import component react-native

const exercise2 = () => {
  //buat fungsi return jsx
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text style={Styles.title}>BIODATA</Text>
      </View>

      <View>
        <Image style={Styles.profil} source={require('./assets/profil.jpg')} />
      </View>

      <View>
        <Text style={Styles.text}>Name:</Text>
      </View>

      <View style={Styles.content}>
        <Text style={Styles.isicontent}>Faithza Azalia Mandolang</Text>
      </View>

      <View>
        <Text style={Styles.text}>Address:</Text>
      </View>

      <View style={Styles.content}>
        <Text style={Styles.isicontent}>Tomohon, Sulawesi Utara</Text>
      </View>

      <View>
        <Text style={Styles.text}>Email:</Text>
      </View>

      <View style={Styles.content}>
        <Text style={Styles.isicontent}>faithzaazalia@gmail.com</Text>
      </View>

      <View>
        <Text style={Styles.text}>Birth Date:</Text>
      </View>

      <View style={Styles.content}>
        <Text style={Styles.isicontent}>27 Juni</Text>
      </View>

      <View>
        <Text style={Styles.text}>Gender:</Text>
      </View>

      <View style={Styles.content}>
        <Text style={Styles.isicontent}>Female</Text>
      </View>

      <View>
        <Text style={Styles.text}>Phone Number:</Text>
      </View>

      <View style={Styles.content}>
        <Text style={Styles.isicontent}>085339017033</Text>
      </View>

      <View>
        <Text style={Styles.text}>Educational Background:</Text>
      </View>

      <View style={Styles.content}>
        <Text style={Styles.isicontent}>
          2022{'\n'}Universitas Klabat{'\n'}Computer Science-Informatics
        </Text>
      </View>

      <View>
        <Text style={Styles.text}>Skill:</Text>
      </View>

      <View style={Styles.content}>
        <Text style={Styles.isicontent}>
          Web Development{'\n'}Mobile App Development{'\n'}Game Development
        </Text>
      </View>

      <View>
        <Text style={Styles.text}>Contact Me!</Text>
      </View>

      <TextInput style={Styles.input} placeholder="Write your message" />

      <TouchableOpacity style={Styles.btn} activeOpacity={0.5}>
        <Text style={Styles.buttontext}>Send</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default exercise2;

const Styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    padding: 20,
    fontSize: 30,
    fontFamily: 'serif',
  },

  profil: {
    borderRadius: 200,
    height: 180,
    width: 180,
    marginLeft: 120,
    marginTop: 15,
  },

  text: {
    fontSize: 15,
    padding: 15,
    marginTop: 30,
    fontFamily: 'serif',
  },

  content: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
  },

  isicontent: {
    fontSize: 15,
    fontFamily: 'serif',
  },

  input: {
    borderWidth: 1,
    borderColor: 'grey',
    margin: 15,
    marginTop: 10,
    borderRadius: 5,
    fontSize: 15,
    padding: 20,
  },
  btn: {
    backgroundColor: 'purple',
    width: 100,
    height: 60,
    marginLeft: 150,
    padding: 20,
    borderRadius: 100,
    marginBottom: 5,
  },
  buttontext: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});
