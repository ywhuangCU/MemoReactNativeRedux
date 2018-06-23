
import React from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

const placeList = props => {
  // const placesOutput = props.places.map((place, i) => (
  //   <ListItem
  //     key={i}
  //     placeName={place}
  //     onItemPressed={() => props.onPlaceDeleted(i)}
  //   />
  // ));
  //() => alert('Item:' + i)
  return (
    <FlatList
        //removeClippedSubviews={true}
        style={styles.placeList}
        data={props.places}
        renderItem={(info) => (
          <ListItem
            placeName={info.item.name}
            image={info.item.image}
            onItemPressed={() => props.onPlaceSelected(info.item.key)}
          />
        )
        }
    />
  );
};

const styles = StyleSheet.create({
  placeList: {
    width: '100%'
  }
});

export default placeList;
