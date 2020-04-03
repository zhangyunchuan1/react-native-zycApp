import React, { Component } from 'react';
import { 
  View,
  Text, 
} from 'react-native';

export default class Loading extends Component {
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>加载页</Text>
    </View>
    );
  }
}