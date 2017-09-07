import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Image, ScrollView } from 'react-native';
import Product from './Product'
import SizeSelection from './SizeSelection'

const { width, height } = Dimensions.get('window')

export default class App extends React.Component {
  static navigationOptions = props => {
    return {
      title: props.navigation.state.params.item.name
    }
  }

  render () {
    const item = this.props.navigation.state.params.item
    return (
      <View style={styles.container}>
        <Text>{item.name}</Text>
        <View style={styles.scrollViewContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.imageContainer} ><Image resizeMode={'contain'} style={styles.image} source={{ uri: item.images.replace('__IMAGE_PARAMS__', 'v1') }} /></View>
            <View style={styles.imageContainer} ><Image resizeMode={'contain'} style={styles.image} source={{ uri: item.images.replace('__IMAGE_PARAMS__', 'v1') }} /></View>
            <View style={styles.imageContainer} ><Image resizeMode={'contain'} style={styles.image} source={{ uri: item.images.replace('__IMAGE_PARAMS__', 'v1') }} /></View>
            <View style={styles.imageContainer} ><Image resizeMode={'contain'} style={styles.image} source={{ uri: item.images.replace('__IMAGE_PARAMS__', 'v1') }} /></View>
          </ScrollView>
        </View >
        <SizeSelection />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  scrollViewContainer: {
    height: 300,
  },
  image: {
    flex: 1
  },
  imageContainer: {
    padding: 10,
    width: width,
    height: 250,
  },
});