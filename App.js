import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/albumList';

export default class albums extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header text='Albums' />
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#FFF',
  }
});