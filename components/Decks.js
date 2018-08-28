import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { white } from '../utils/colours'

class Decks extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Decks</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  }
})

export default Decks
