import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Platform, StatusBar } from 'react-native';
import Product from './src/Product'
import { StackNavigator } from 'react-navigation'
import ProductList from './src/ProductList'
import ProductDetail from './src/ProductDetails'

export default StackNavigator({
  ProductList: {
    screen: ProductList,
    navigationOptions: {
      title: 'SSENSE',
      headerStyle: {
        marginTop: StatusBar.currentHeight
      }
    }
  },
  ProductDetail: {
    screen: ProductDetail,
    navigationOptions: {
      headerStyle: {
        marginTop: StatusBar.currentHeight
      }
    }
  },
})