import React from 'react'
import 'react-native-gesture-handler'
import {SafeAreaView, View, StyleSheet} from 'react-native'
const App = () => {
  return (
    <SafeAreaView testID='main' style={styles.container}>
      <View testID='first' style={styles.first}>
        <View style={styles.subView} />
        <View style={styles.subView} />
        <View style={styles.subView} />
      </View>

      <View testID='second' style={styles.second}>
        <View style={styles.subView} />
        <View style={styles.subView} />
        <View style={styles.subView} />
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  first: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 40,
    borderColor: 'red',
    borderWidth: 1,
  },
  second: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    margin: 40,
    borderColor: 'red',
    borderWidth: 1,
  },
  subView: {
    height: 50,
    width: 50,
    backgroundColor: 'skyblue',
  },
})
export default App
