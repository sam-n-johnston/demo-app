import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';

let BUTTONS = [
  'Small',
  'Medium',
  'Large',
  'Select a size',
]
let INITIAL_IND = 3

export default class SizeSelection extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedValue: INITIAL_IND
    }
  }

  render () {
    return (
      <View style={{ height: 50, width: 250 }} >
        <Picker
          selectedValue={BUTTONS[this.state.selectedValue]}
          onValueChange={(itemValue, itemIndex) => { this.setState({ selectedValue: itemIndex }) }}
          mode={'dropdown'}
        >
          <Picker.Item label={BUTTONS[0]} value={BUTTONS[0]} />
          <Picker.Item label={BUTTONS[1]} value={BUTTONS[1]} />
          <Picker.Item label={BUTTONS[2]} value={BUTTONS[2]} />
        </Picker>
      </View>
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