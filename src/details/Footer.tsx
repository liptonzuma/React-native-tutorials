import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Button from '../shared/Button';
import { regular, semiBold } from '../utils/fonts';

export default function Footer() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom || 15,
        },
      ]}
    >
      <View style={styles.priceContainer}>
        <Text style={styles.mainPrice}>$3,220,300</Text>
        <Text style={styles.small}>$1,409 / ft&sup2;</Text>
      </View>
      <Button onPress={() => {}} label="Contact Realtor" />
    </View>
  );
}

const styles = StyleSheet.create({
  small: {
    ...regular,
    fontSize: 11,
    opacity: 0.5,
  },
  mainPrice: {
    ...semiBold,
    fontSize: 16,
    letterSpacing: 1.1,
    opacity: 0.7,
  },
  priceContainer: {},
  container: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowOffset: { height: 10, width: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.2,
    shadowColor: 'black',
    elevation: 10,
  },
});
