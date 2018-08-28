import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { white, grey } from '../utils/colours'

class Deck extends Component {
  render() {
    const { deck } = this.props
    const cardCount = deck.questions.length
    const cardText = cardCount === 1
      ? 'card'
      : 'cards'

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text>{cardCount} {cardText}</Text>
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
  },
  title: {
    fontSize: 35
  }
})

export default Deck
