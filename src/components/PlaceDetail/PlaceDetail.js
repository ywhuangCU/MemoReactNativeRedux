import React from 'react';
import { View, Text, Modal, Button, Image, StyleSheet } from 'react-native';

const placeDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}> {props.selectedPlace.name} </Text>
      </View>
    );
  }

  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedPlace !== null}
      animationType='slide'
    >
      <View style={styles.modalContent}>
        {modalContent}
        <View>
          <Button title='Delete' color='red' onPress={props.onPlaceDeleted} />
          <Button title='Close' onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    margin: 22
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default placeDetail;
