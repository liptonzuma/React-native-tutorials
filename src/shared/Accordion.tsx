import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { bold, regular } from '../utils/fonts';

export default function Accordion({
  title,
  details,
}: {
  title: string;
  details: string;
}) {
  const [opened, setOpened] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const numberOfWords = details.split(' ').length;

  function toggleAccordion() {
    if (!opened) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }).start();
    }
    setOpened(!opened);
  }

  //   This is where we use the to values

  const heightAnimationInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, (numberOfWords / 2.6) * 10], // animate from the first value to the sercond value
  });
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={toggleAccordion}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <AntDesign name={opened ? 'caretup' : 'caretdown'} size={16} />
        </View>
      </TouchableWithoutFeedback>

      <Animated.View
        style={[styles.content, { height: heightAnimationInterpolation }]}
      >
        <Text style={styles.details}>{details}</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    ...regular,
    opacity: 0.65,
  },
  title: {
    ...bold,
    textTransform: 'capitalize',
  },
  content: {
    marginTop: 8,
  },
  container: {
    margin: 10,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
