import React from 'react'
import {View, TextInput, Text, StatusBar, Button, Alert, Image} from 'react-native';
import Styles from '../assets/styles/Styles'

export default class InsertText extends React.Component{

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.textInput}>
                <StatusBar hidden={true}/>
                <TextInput
                    style={Styles.input}
                    placeholder="Enter you text!"
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Text>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
                <View style={{ width: '70%', marginHorizontal: 50, marginTop: 80 }}>
                    <Button title={"Save"} color="orange" onPress={() => Alert.alert('Simple Button pressed')}/>
                </View>
                <Image style={{width: 50, height: 50, marginVertical: 40, marginHorizontal: 290}} source={require('../assets/icons/add.png')} />
            </View>
        )
    }
}
