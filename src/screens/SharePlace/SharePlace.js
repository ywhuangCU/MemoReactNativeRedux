import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux' //use connect to connect to Redux

import PlaceInput from '../../components/PlaceInput/PlaceInput'
import { addPlace } from '../../store/actions/index'

class SharePlaceScreen extends Component {

    placeAddedHandler = placeName => {
        console.log("got the value from PlaceInput's callback:"+placeName)
        this.props.onAddPlace(placeName) // calling the props in mapDispatchToProps
    }

    render () {
        return (
            <View>
                 <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
}

//export default SharePlaceScreen
export default connect(null,mapDispatchToProps)(SharePlaceScreen) //first null => mapStateToProps