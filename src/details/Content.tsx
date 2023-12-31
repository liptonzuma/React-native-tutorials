import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { regular, semiBold } from '../utils/fonts';
import { Entypo, Ionicons } from '@expo/vector-icons';
import IoniconsAmenitiesView from '../shared/IoniconsAmenitiesView';

const amenities = [
  {
    iconName: 'bed-outline',
    label: '5',
  },
  {
    iconName: 'car-sport-outline',
    label: '12',
  },
  {
    iconName: 'file-tray-full-outline',
    label: '6',
  },
  {
    iconName: 'basketball-outline',
    label: '2',
  },
  {
    iconName: 'analytics-outline',
    label: '1200ft',
  },
];

export default function Content() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tonlip Luxury House</Text>
      <View style={styles.locationWrapper}>
        <Entypo size={22} name="location-pin" style={{ opacity: 0.6 }} />
        <Text style={styles.location}>
          234 Banana Street, AnyTown, Country.
        </Text>
      </View>

      <View style={styles.amenities}>
        {amenities.map((amenity) => (
          <IoniconsAmenitiesView
            key={amenity.iconName}
            label={amenity.label.toString()}
            iconName={amenity.iconName}
          />
        ))}
      </View>

      <Text style={styles.description}>
        Welcome to your luxurious retreat! This stunning 5-bedroom estate offers
        an unparalleled blend of elegance and comfort. Step into spacious
        interiors adorned with exquisite finishes and flooded with natural
        light. Indulge in the gourmet kitchen, perfect for culinary enthusiasts,
        or unwind in the lavish master suite with its own private oasis. With a
        sprawling backyard, pool, and entertainment deck, every day feels like a
        vacation. This is more than a home; it's a lifestyle. Don't miss your
        chance to experience the pinnacle of luxury living.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  description: {
    ...regular,
    marginTop: 10,
    opacity: 0.7,
    fontSize: 14,
  },
  amenities: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    marginTop: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 15,
  },
  location: {
    ...regular,
    fontSize: 13,
    opacity: 0.6,
    marginVertical: 4,
  },
  locationWrapper: {
    flexDirection: 'row',
    rowGap: 20,
    alignItems: 'center',
  },
  title: {
    ...semiBold,
    fontSize: 16,
    opacity: 0.8,
  },
  container: {
    paddingHorizontal: 15,
    marginTop: 15,
  },
});
