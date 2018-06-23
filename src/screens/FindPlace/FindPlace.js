import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import PlaceList from '../../components/PlaceList/PlaceList'

class FindPlaceScreen extends Component {
    //when store.places(rootreducer).places change => re-render (reloadData)
    render () {
        return (
            <View>
                 <PlaceList places={this.props.places}/>
            </View>
        )
    }
}
//subscription to central store changrs
const mapStateToProps = store => {
    return {
        places: store.places.places
    }
}

export default connect(mapStateToProps)(FindPlaceScreen)



// import React, { Component } from 'react'
// import { View, Text } from 'react-native'

// class FindPlaceScreen extends Component {
//     render () {
//         return (
//             <View>
//                  <Text> On SharePlaceScreen </Text>
//             </View>
//         )
//     }
// }

// export default FindPlaceScreen