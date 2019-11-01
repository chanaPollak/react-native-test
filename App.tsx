import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Header, Avatar } from 'react-native-elements'
import ColorInput from './components/ColorInput'


export default function App() {
  const [myColor, colorChanged] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header centerComponent={{ text: 'React Native Text', style: { color: '#fff' } }} />
      </View>

      <View style={styles.body}>
        <ColorInput onColorChanged={colorChanged} color={myColor} />
        <View style={[styles.resultView, { backgroundColor: '#' + myColor }]}></View>
      </View>
      <View>

      </View>
      <View style={styles.footer}>
        <View style={{ alignSelf: 'center' }}><Avatar rounded title="CB" /></View>
        <Text style={styles.footerText}>Created by Chana Pollak 10.2019</Text>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
  },
  body: {
    flex: 5,
    flexDirection: 'row',
  },

  inputView: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 48,
    width: '80%',
    padding: 8,
    margin: 16,
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
  },
  resultView: {
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: 'lightblue',
  },
  footer: {
    flex: 0.5,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'steelblue',
  },
  footerText: {
    marginHorizontal: 10,
    color: 'white',
    alignSelf: 'center',
  }
});
