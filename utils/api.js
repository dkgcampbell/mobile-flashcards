import { AsyncStorage } from 'react-native';

const DECKS = 'mobile-flashcards:Decks'
// const dummyData = {
//   React: {
//     title: 'React',
//     questions: [
//       {
//         question: 'What is React?',
//         answer: 'A library for managing user interfaces'
//       },
//       {
//         question: 'Where do you make Ajax requests in React?',
//         answer: 'The componentDidMount lifecycle event'
//       }
//     ]
//   },
//   JavaScript: {
//     title: 'JavaScript',
//     questions: [
//       {
//         question: 'What is a closure?',
//         answer: 'The combination of a function and the lexical environment within which that function was declared.'
//       }
//     ]
//   }
// }

export async function getDecks() {
  return await AsyncStorage.getItem(DECKS).then(JSON.parse)
}

// export function getDeck(id) {
//   return AsyncStorage.getItem(DECKS).then(JSON.parse).then((result) => {
//     return result[id];
//   });
// }

export function saveDeckTitle(title) {
  return AsyncStorage.getItem(DECKS).then(JSON.parse).then((result) => {
    result[title] = {
        title,
        questions: []
    };

    AsyncStorage.setItem(DECKS, JSON.stringify(result));
    return result[title];
  });
}

export function addCardToDeck(title, question, answer) {
  return AsyncStorage.getItem(DECKS).then(JSON.parse).then((result) => {
    result[title].questions.push({ question, answer });

    AsyncStorage.setItem(DECKS, JSON.stringify(result));
    return result[title];
  });
}
