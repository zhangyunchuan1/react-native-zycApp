import React, { Component } from 'react';
import { 
  View,
  Text, 
  Button,
} from 'react-native';
import { connect } from 'react-redux';

class Home extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  handleAdd = () => {
    this.props.dispatch({
      type:'UPDATA_USER',
      user:{
        name:'王八',
        age:25
      }
    })
    setTimeout(() => {
      console.log(this.props.user)
    }, 1000);
  }
  handleARemove = () => {
    this.props.dispatch({
      type:'CLEAR_USER',
    })
    setTimeout(() => {
      console.log(this.props.user)
    }, 1000);
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>主页</Text>
        <Button
          title='跳转home的详情'
          onPress={()=>this.props.navigation.navigate('Detail')}
        />
        <Button
          title='更新store数据'
          onPress={this.handleAdd}
        />
        <Button
          title='删除store数据'
          onPress={this.handleARemove}
        />
        <Text>store数据+{JSON.stringify(this.props.user)}</Text>
        <Button
          title='登陆页'
          onPress={()=>this.props.navigation.navigate('Login')}
        />
    </View>
    );
  }
}

export default connect(state => ({ user: state.user }))(Home)