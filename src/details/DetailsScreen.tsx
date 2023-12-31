import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import React from 'react';
import Footer from './Footer';
import Content from './Content';
import CarouselView from './CarouselView';

const height = Dimensions.get('window').height;
export default function DetailsScreen() {
  return (
    <View style={styles.main}>
      <FlatList
        contentContainerStyle={styles.scrollView}
        data={null}
        showsVerticalScrollIndicator={false}
        renderItem={null}
        ListEmptyComponent={() => (
          <>
            <CarouselView />
            <Content />
          </>
        )}
      />

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: height / 9,
  },

  main: {
    flex: 1,
    backgroundColor: 'white',
  },
});
