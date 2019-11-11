import React from 'react'
import { View, TouchableHighlight, Text, Image } from 'react-native'
import Styles from '../assets/styles/Styles'

export default class ImageHome extends React.Component {

    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    onPress = () => {
        this.setState({
            count: this.state.count+1
        })
    }

    render() {
        return (
            <View style={Styles.container}>
                <TouchableHighlight onPress={() => this.onPress()}>
                    <Image style={{width: 150, height: 150}} source={require('../assets/icons/image.png')} />
                </TouchableHighlight>
                <View>
                    <Text>
                        { this.state.count !== 0 ? this.state.count: null}
                    </Text>
                </View>
            </View>
        )
    }
}
