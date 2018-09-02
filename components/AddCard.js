import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { white, black } from '../utils/colours'
import { addCardToDeck } from '../utils/api'

class AddCard extends Component {
  state = {
    title: this.props.navigation.state.params.deck.title,
    question: null,
    answer: null
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
          />
        <TextInput 
          style={styles.input}
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
          />
        <TouchableOpacity style={styles.button} disabled={!this.state.question || !this.state.answer} onPress={() => {
          addCardToDeck(this.state.title, this.state.question, this.state.answer)
            .then((d) => this.props.navigation.navigate('Deck', { deck: d }))
        }}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
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
  input: {
    height: 30
  },
  buttonText :{
    color: white,
    fontSize: 20,
  },
  button: {
    padding: 10,
    backgroundColor: black,
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 2,
    margin: 20,
  }
})

export default AddCard
