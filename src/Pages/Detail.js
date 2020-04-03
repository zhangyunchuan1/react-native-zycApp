import React, { Component } from 'react';
import { 
  View,
  Text, 
} from 'react-native';

export default class Detail extends Component {
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>主页详情</Text>
    </View>
    );
  }
}