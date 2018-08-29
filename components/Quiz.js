import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { white, grey, black } from '../utils/colours'

class Quiz extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Quiz
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
})

export default Quiz
