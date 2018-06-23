import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export default class PlaceInput extends Component {
  state = {
    placeName: ''
  }

  placeNameChangeHandler = (val) => {
    this.setState({
      placeName: val
    });
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    //event: submit  callback: onPlaceAdded()   passing the value of placeName to the call back
    this.props.onPlaceAdded(this.state.placeName);
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="A place"
          style={styles.placeInput}
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
        />
        <Button
          style={styles.placeButton}
          title="Add"
          onPress={this.placeSubmitHandler}
        />
      </View>


    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%',
    borderColor: 'black',
    borderWidth: 1
  },
  placeButton: {
    width: '30%'
  }
});
