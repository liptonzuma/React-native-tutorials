import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Accordion from '../shared/Accordion';

const frequentlyAskedQuestions = [
  {
    question: 'How many subscribers aimed for today?',
    answer: 'As many as we can get. Please kindly like and subscribe.',
  },
  {
    question: 'How much does it cost to subscribe to this channel?',
    answer:
      "There's no charge involved in subscribing, so what's preventing you from subscribing. Please subscribe and like",
  },
  {
    question: 'What will more subscribers do for this channel?',
    answer:
      'More subscribers would help this poor dude get pumped to do more of this stuff.',
  },
];

export default function Components() {
  return (
    <View>
      {frequentlyAskedQuestions.map((faq, index) => (
        <Accordion
          key={index.toString()}
          title={faq.question}
          details={faq.answer}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
