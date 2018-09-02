import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { white, green, red, black } from '../utils/colours'
import { clearLocalNotification, setLocalNotification } from '../utils/notifications'

class Quiz extends Component {
  state = {
    showQuestion: true,
    questions: this.props.navigation.state.params.deck.questions,
    currentQuestion: 0,
    correctAnswers: 0
  }

  renderButtons = () => {
    const { currentQuestion, correctAnswers } = this.state
    return (
      <View>
        <TouchableOpacity style={styles.correctButton} onPress={() => this.setState({
          currentQuestion: currentQuestion + 1,
          correctAnswers: correctAnswers + 1,
          showQuestion: true
        })}>
          <Text style={styles.buttonText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.incorrectButton} onPress={() => this.setState({ 
          currentQuestion: currentQuestion + 1, 
          showQuestion: true
        })}>
          <Text style={styles.buttonText}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderQuestion = () => {
    const { showQuestion, currentQuestion, questions } = this.state
    const questionOrAnswer = showQuestion
      ? questions[currentQuestion].question
      : questions[currentQuestion].answer
      const questionOrAnswerText = showQuestion ? 'Answer' : 'Question'

    return (
      <View>
        <Text style={styles.questionCount}>
          {currentQuestion+1}/{questions.length}
        </Text>
        <Text style={styles.question}>
          {questionOrAnswer}
        </Text>
        <TouchableOpacity style={styles.questionButton} onPress={() => this.setState({ showQuestion: !this.state.showQuestion })}>
          <Text style={styles.questionButtonText}>{questionOrAnswerText}</Text>
        </TouchableOpacity>
        {!showQuestion && this.renderButtons()}
      </View>
    )
  }

  renderScore = () => {
    const { correctAnswers, questions } = this.state
    clearLocalNotification()
      .then(setLocalNotification)
    return (
      <View style={styles.container}>
        <Text style={styles.question}>
          You scored {correctAnswers}/{questions.length}
        </Text>
        <TouchableOpacity style={styles.restartButton} onPress={() => this.setState({ 
          currentQuestion: 0, 
          correctAnswers: 0,
          showQuestion: true
        })}>
          <Text style={styles.restartButtonText}>
            Restart Quiz
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.buttonText}>
            Back to Deck
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const { currentQuestion, questions } = this.state

    return (
      <View style={styles.container}>
        {currentQuestion < questions.length
          ? this.renderQuestion()
          : this.renderScore()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  questionCount: {
    marginBottom: 10
  },
  question: {
    textAlign: 'center',
    color: black,
    fontSize: 30,
    marginBottom: 10
  },
  questionButton: {
    padding: 10,
    backgroundColor: white,
    alignSelf: 'center',
    margin: 20,
  },
  questionButtonText :{
    color: red,
    fontSize: 20,
  },
  correctButton: {
    padding: 10,
    backgroundColor: green,
    alignSelf: 'center',
    borderRadius: 5,
    margin: 20,
  },
  incorrectButton: {
    padding: 10,
    backgroundColor: red,
    alignSelf: 'center',
    borderRadius: 5,
    margin: 20,
  },
  buttonText :{
    color: white,
    fontSize: 20,
  },
  restartButton: {
    padding: 10,
    backgroundColor: white,
    alignSelf: 'center',
    borderRadius: 5,
    borderColor: black,
    borderWidth: 2,
    margin: 20,
  },
  restartButtonText :{
    color: black,
    fontSize: 20,
  },
  backButton: {
    padding: 10,
    backgroundColor: black,
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 2,
    margin: 20,
  }
})

export default Quiz
