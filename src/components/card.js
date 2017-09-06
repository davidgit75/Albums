import React, { Component } from 'react';
import {
  View, Text,
  StyleSheet
} from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10
  },
});

export default Card;