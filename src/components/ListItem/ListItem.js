import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
      <View style={styles.listItem}>
        <Image resizeMode='cover' source={props.image} style={styles.image} />
        <Text>{props.placeName}</Text>
      </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    backgroundColor: '#eee',
    padding: 10,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    marginRight: 8,
    width: 30,
    height: 30
  }
});

export default listItem;
