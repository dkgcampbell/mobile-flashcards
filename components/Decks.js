import React, { Component } from 'react'
import { StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native'
import { white, grey } from '../utils/colours'
import { getDecks } from '../utils/api'

class Decks extends Component {
  state = {
    decks: null
  }

  render() {
    getDecks()
      .then((decks) => {
        this.setState({decks})
      })
    const { decks } = this.state
    var deckIds = null
    if (decks) deckIds = Object.keys(decks)

    return (
      <ScrollView style={styles.container}>
        {deckIds && deckIds.map((key) => {
          const deck = decks[key]
          const cardCount = deck ? deck.questions.length : 0
          const cardText = cardCount === 1
            ? 'card'
            : 'cards'
          const title = deck ? deck.title : ''
          return (
            <TouchableOpacity key={key} style={styles.deck} onPress={() => this.props.navigation.navigate('Deck', { deck: deck })}>
                <Text style={styles.deckTitle}>{title}</Text>
                <Text>{cardCount} {cardText}</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  deck: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  deckTitle: {
    fontSize: 35
  }
})

export default Decks
