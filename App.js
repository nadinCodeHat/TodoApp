import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Item from './components/Item';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasks}>
        <Text style={styles.title}>My Tasks</Text>
        <View style={styles.items}>
          {/* items here */}
          <Item text={'Task 1'} />
          <Item text={'Task 2'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cee0df',
  },

  tasks: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },

  items: {
    marginTop: 20,
  },
});
