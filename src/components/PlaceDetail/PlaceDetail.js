import React from 'react';
import { View, Text, Modal, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import icon8 from '../../assets/icons8-50.png'
import Icon from 'react-native-vector-icons/Ionicons';

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
          {/*<Button title='Delete' color='red' onPress={props.onPlaceDeleted} />*/}
          <TouchableOpacity onPress={props.onPlaceDeleted}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-trash" color="red" />
            </View>
          </TouchableOpacity>
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
    textAlign: 'center',
    fontSize: 28
  },
  deleteButton: {
    alignItems: "center",
  }
});

export default placeDetail;
