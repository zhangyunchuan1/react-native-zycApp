import React, { Component } from 'react';
import { 
  View,
  Text, 
} from 'react-native';
import { connect } from 'react-redux';

class Mine extends Component {
  componentDidMount(){
    console.log(this.props.user)
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>我的</Text>
    <Text>Store的数据：{JSON.stringify(this.props.user)}</Text>
    </View>
    );
  }
}

// const mapStateToProps = (state) => {
//   // const { friends } = state
//   console.log(state)
//   return state
// };

export default connect((state)=>(state))(Mine)