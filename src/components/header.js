import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text
} from 'react-native';

class Header extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  static defaultProps = {
    text: 'Default Text'
  }

  render() {
    const { viewStyle, textStyle } = styles;
    const { text } = this.props;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{text}</Text>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    padding: 10
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
};

export default Header;
