import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import Product from './Product'

const { width, height } = Dimensions.get('window')
const endpoint = 'anendpoint'
const fetchProducts = (page) => fetch(`${endpoint}&page=${page}`)

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      products: [],
      currentPage: 1
    }
  }

  fetchProducts () {
    console.log('fetching proucts')
    fetchProducts(this.state.currentPage)
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: this.state.products.concat(data.products),
          currentPage: this.state.currentPage + 1
        })
      })
  }

  componentDidMount () {
    this.fetchProducts()
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.products}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.singleItem} onPress={() => this.props.navigation.navigate('ProductDetail', { item })} >
              <Product item={item} />
            </TouchableOpacity>
          )}
          numColumns={2}
          ListFooterComponent={() => <View style={{ height: 20, margin: 20 }} ><ActivityIndicator /></View>}
          onEndReached={() => this.fetchProducts()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  singleItem: {
    width: width / 2,
    height: 250
  }
});