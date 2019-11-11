import React from 'react'
import {View, Text} from 'react-native'
import Styles from '../assets/styles/Styles'
import MyPicker from '../components/Picker'
import ImageHome from '../components/Touchable'
import TextInput from '../components/TextInput'

export default class CreateHome extends React.Component{
  render(): React.ReactNode {
     return (
        <View>
            <Text style={Styles.title}>Ajouter maison</Text>
            <MyPicker/>
            <View>
                <ImageHome/>
            </View>
            <TextInput/>
        </View>
     )
  }
}
