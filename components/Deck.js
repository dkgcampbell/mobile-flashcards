import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { white, grey, black } from '../utils/colours'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
    return {
      title: `${deck.title}`
    }
  }

  render() {
    const { deck } = this.props.navigation.state.params
    const cardCount = deck.questions ? deck.questions.length : 0
    const cardText = cardCount === 1
      ? 'card'
      : 'cards'

    return (
      <View style={styles.container}>
        <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text>{cardCount} {cardText}</Text>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={() => this.props.navigation.navigate('AddCard', { deck: deck })}>
          <Text style={styles.addButtonText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startButton} onPress={() => this.props.navigation.navigate('Quiz', { deck: deck })}>
          <Text style={styles.startButtonText}>Start Quiz</Text>
        </TouchableOpacity>
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
  },
  addButton: {
    padding: 10,
    backgroundColor: white,
    alignSelf: 'center',
    borderRadius: 5,
    borderColor: black,
    borderWidth: 2,
    margin: 20,
  },
  addButtonText :{
    color: black,
    fontSize: 20,
  },
  startButton: {
    padding: 10,
    backgroundColor: black,
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 2,
    margin: 20,
  },
  startButtonText :{
    color: white,
    fontSize: 20,
  },
})

export default Deck
