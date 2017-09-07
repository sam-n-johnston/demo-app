import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class Product extends React.Component {
  render () {
    return (
      <View style={styles.container} >
        <Image resizeMode={'contain'} style={styles.image} source={{ uri: this.props.item.images.replace('__IMAGE_PARAMS__', 'v1') }} />
        <Text>{this.props.item.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 10
  },
})