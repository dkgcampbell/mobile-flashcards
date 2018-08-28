import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { white } from '../utils/colours'
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
          return (
            <Deck 
              key={key}
              deck={decks[key]}
              />
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
  }
})

export default Decks
