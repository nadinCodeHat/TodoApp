import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Item = props => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.circular}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10,
  },

  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  circular: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderColor: '#e3f3ff',
    borderWidth: 2,
    borderRadius: 15,
    marginRight: 5,
  },

  itemText: {
    maxWidth: '80%',
  },
});

export default Item;
