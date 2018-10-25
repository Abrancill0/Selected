import React, {Component} from 'react';
import {View} from 'react-native';
import styles from '../styles/CastSearchStyle';

export default class TriangleUp extends Component{
    render() {
      return (
        <View style={[styles.triangle, this.props.style]} />
      );
    }
  }
