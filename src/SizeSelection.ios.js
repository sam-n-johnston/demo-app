import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView, ActionSheetIOS } from 'react-native';

let BUTTONS = [
  'Small',
  'Medium',
  'Large',
  'Cancel',
]
let CANCEL_INDEX = 3

export default class SizeSelection extends React.Component {
  constructor (props) {
    super(props)
    this.showActionSheet = this.showActionSheet.bind(this)
  }

  showActionSheet () {
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX
    },
      (buttonIndex) => {
        this.setState({
          clickedButtonIndex: buttonIndex
        })
      })
  }

  render () {
    console.log(this.state)
    return (
      <TouchableOpacity style={styles.sizeSelection} onPress={this.showActionSheet} >
        <Text style={styles.text}>{this.state && this.state.clickedButtonIndex !== CANCEL_INDEX ? BUTTONS[this.state.clickedButtonIndex] : 'Select your Size'}</Text>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  sizeSelection: {
    height: 50,
    width: 250,
    borderWidth: 3,
    borderColor: 'black',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    textAlign: 'center'
  }
});