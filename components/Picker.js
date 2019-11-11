import React from 'react'
import {Picker, View} from 'react-native'
import Styles from '../assets/styles/Styles'

export default class MyPicker extends React.Component{

    state = {numberImage: ''}

    updateNumberImage = (numberImage) => {
        this.setState({ numberImage: numberImage })
    }

    render() {
        return (
            <View>
                <Picker
                    style={Styles.picker}
                    placeholder="Entrer le nombre image à choisir"
                    selectedValue={this.state.numberImage}
                    onValueChange={this.updateNumberImage}>
                    <Picker.Item label="1" value="premier nombre" />
                    <Picker.Item label="2" value="second nombre" />
                </Picker>
            </View>
        )
    }
}
