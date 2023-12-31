import {
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import { medium } from '../utils/fonts';

interface ButtonProps {
  containerStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  label: string;
  onPress: () => any;
}

export default function Button(props: ButtonProps) {
  const { label, onPress, containerStyles, textStyles } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyles]}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, textStyles]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#f5f5f5',
    ...medium,
  },
  container: {
    backgroundColor: '#0071ff',
    height: 40,
    paddingHorizontal: 15,
    flexDirection: 'row',
    borderRadius: 6,
    alignItems: 'center',
  },
});
