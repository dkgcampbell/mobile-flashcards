import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { white, black } from '../utils/colours'
import { saveDeckTitle } from '../utils/api'

class NewDeck extends Component {
  state = {
    text: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.question}>What is the title of your new deck?</Text>
        <TextInput 
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          />
        <TouchableOpacity style={styles.button} disabled={!this.state.text} onPress={() => {
          saveDeckTitle(this.state.text)
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
  question: {
    textAlign: 'center',
    color: black,
    fontSize: 30,
    marginBottom: 10
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

export default NewDeck
