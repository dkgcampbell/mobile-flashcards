import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { white, grey } from '../utils/colours'
import Deck from './Deck'

class Decks extends Component {
  render() {
    // TODO get from localStorage
    const decks = {
      React: {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    }

    return (
      <View style={styles.container}>
        {Object.keys(decks).map((key) => {
          const deck = decks[key]
          const cardCount = deck.questions.length
          const cardText = cardCount === 1
            ? 'card'
            : 'cards'
          return (
            <TouchableOpacity key={key} style={styles.deck} onPress={() => this.props.navigation.navigate('Deck', { deck: deck })}>
                <Text style={styles.deckTitle}>{deck.title}</Text>
                <Text>{cardCount} {cardText}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
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
