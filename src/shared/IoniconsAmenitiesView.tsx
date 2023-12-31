import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { semiBold } from '../utils/fonts';
interface IconViewProps {
  iconName: any;
  label: string;
}

export default function IoniconsAmenitiesView(props: IconViewProps) {
  const { iconName, label } = props;
  return (
    <View style={styles.container}>
      <Ionicons name={iconName} size={24} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  label: {
    ...semiBold,
    fontSize: 14,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    opacity: 0.6,
  },
});
