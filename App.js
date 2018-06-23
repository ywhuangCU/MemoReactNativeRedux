import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import AuthScreen from "./src/screens/Auth/Auth"
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace"
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import configureStore from './src/store/configureStore';

const store = configureStore();
//Register some screen
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen, store, Provider)
Navigation.registerComponent("awesome-places.SharePlaceScreen", () => SharePlaceScreen, store, Provider)
Navigation.registerComponent("awesome-places.FindPlaceScreen", () => FindPlaceScreen, store, Provider)
//start an App
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
})

// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import { connect } from 'react-redux';

// import PlaceInput from './src/components/PlaceInput/PlaceInput';
// import PlaceList from './src/components/PlaceList/PlaceList';
// import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
// import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';

// class App extends React.Component {

//   // state = {
//   //   places: [],
//   //   selectedPlace: null
//   // }


//   placeAddedHandler = placeName => {
//     this.props.onAddPlace(placeName);
//     //debugger;
//     console.log('place added');
//     // this.setState(prevState => {
//     //   return {
//     //     places: prevState.places.concat({
//     //       key: Math.random().toString(), //or not using toString()
//     //       name: placeName,
//     //       image: { uri: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/f4/e4/8d/munich-super-saver-brewery.jpg' }
//     //     })
//     //   };
//     // });
//   }

//   placeSelectedHandler = key => {
//     this.props.onSelectPlace(key);
//     // this.setState(prevState => {
//     //   return {
//     //     selectedPlace: prevState.places.find((place) => {
//     //       return place.key === key;
//     //     })
//     //   };
//     // });
//   }
//   placeDeletedHandler = () => {
//     this.props.onDeletePlace();
//     // this.setState(prevState => {
//     //   return {
//     //     places: prevState.places.filter((place) => {
//     //       return place.key !== prevState.selectedPlace.key;
//     //     }),
//     //     //to close the modalContent
//     //     selectedPlace: null
//     //   };
//     // });
//   }

//   modalClosedHandler = () => {
//     this.props.onDeselectPlace();
//     // this.setState({
//     //   selectedPlace: null
//     // });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         {/* <Image
//           style={{ width: 50, height: 50 }}
//           source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
//         /> */}
//         <PlaceDetail
//           selectedPlace={this.props.selectedPlace}
//           onPlaceDeleted={this.placeDeletedHandler}
//           onModalClosed={this.modalClosedHandler}
//         />
//         <PlaceInput onPlaceAdded={this.placeAddedHandler} />
//         <PlaceList
//             places={this.props.places}
//             onPlaceDeleted={this.placeDeletedHandler}
//             onPlaceSelected={this.placeSelectedHandler}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
// });

// const mapStateToProps = state => {
//   return {
//     places: state.placesRootReducer.places,
//     selectedPlace: state.placesRootReducer.selectedPlace
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlace: (name) => dispatch(addPlace(name)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: (key) => dispatch(selectPlace(key)),
//     onDeselectPlace: () => dispatch(deselectPlace())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
