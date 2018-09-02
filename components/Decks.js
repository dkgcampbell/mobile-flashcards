import React, { Component } from 'react'
import { StyleSheet, ScrollView, Text, Animated, TouchableOpacity } from 'react-native'
import { white, grey } from '../utils/colours'
import { getDecks } from '../utils/api'

class Decks extends Component {
  state = {
    decks: null,
    bounceValue: new Animated.Value(1)
  }

  onPress = (deck) => {
    const { bounceValue } = this.state;
    Animated.sequence([
      Animated.timing(bounceValue, { duration: 200, toValue: 1.1}),
      Animated.spring(bounceValue, { toValue: 1, friction: 8})
    ]).start()

    const self = this;
    setTimeout(function(){
      self.props.navigation.navigate('Deck', { deck: deck })
    },1400)
  }

  render() {
    getDecks()
      .then((decks) => {
        this.setState({decks})
      })
    const { decks, bounceValue } = this.state
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
            <Animated.View key={key} style={{transform:[{scale: bounceValue}]}}>
              <TouchableOpacity style={styles.deck} onPress={() => this.onPress(deck)}>
                  <Text style={styles.deckTitle}>{title}</Text>
                  <Text>{cardCount} {cardText}</Text>
              </TouchableOpacity>
            </Animated.View>
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
