//import libraries
import React, { Component } from 'react';
import {
  Text, StyleSheet,
  ScrollView, View,
  ActivityIndicator, Platform
} from 'react-native';
import axios from 'axios';

import AlbumDetail from './albumDetail';

class AlbumList extends Component {
  state = {
    loading: true,
    error: { state: false, message: '' },
    albums: []
  }

  componentWillMount() {
    setTimeout(() => this.getAlbums(), 1500);
  }

  async getAlbums() {
    const response = await axios.get('http://rallycoding.herokuapp.com/api/music_albums');
    try {
      this.setState({ albums: response.data, loading: false, error: { state: false, message: '' } })
    } catch (error) {
      this.setState({ error: { state: true, message: error }, loading: false })
    }
  }

  renderAlbums() {
    return this.state.albums.map((album, index) => (
      <AlbumDetail key={index} album={album} />
    ))
  }

  render() {
    const { viewStyle, loader } = styles;
    const { loading, error, albums } = this.state;
    if (error.state) {
      return (
        <Text>{error.message}</Text>
      )
    } else if (!loading && !error.state) {
      return (  
        <ScrollView contentContainerStyle={viewStyle}>
          {this.renderAlbums()}
        </ScrollView>
      );
    } else if (loading && !error.state) {
      return (
        <ActivityIndicator animating={loading} size={Platform.OS === 'ios' ? 'large' : 5} style={loader} />
      );
    }
  }
}

// define your styles
const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#FFF'
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

//make this component available to the app
export default AlbumList;