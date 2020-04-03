import React, { Component } from 'react';
import { 
  View,
  Text, 
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { post,get } from '../Utils/request'

export default class Login extends Component {
  
  constructor(){
    super();
    this.state = {
      password:'',
      userName:'',
    }
  }
  componentDidMount(){
    console.log('123123')
    this.getData();
    console.log('123123')
  }
  changePassword = (e) => {
    this.setState({
      password:e,
    })
  }
  changeUserName = (e) => {
    this.setState({
      userName:e,
    })
  }
  handleLogin = () => {
    console.log(this.state.password,this.state.userName)
  }
  getData = () => {
    get('/api/article/allArticles',{
      page:1,
      type:1,
    })
    .then(res=>{
      console.log(res)
    })
  }
  render() {
    const { password ,userName} = this.state;
    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/images/login_background.jpg')}
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TextInput
            style={styles.inputUserName}
            placeholder="用户名"
            placeholderTextColor='#bfbfbf'
            onChangeText={this.changeUserName}
            value={userName}
          />
          <TextInput
            style={styles.inputPasswprd}
            placeholder="密码"
            placeholderTextColor='#bfbfbf'
            returnKeyType='go'
            secureTextEntry
            autoCorrect={false}
            onChangeText={this.changePassword}
            value={password}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.touchableOpacity}
            onPress={this.handleLogin}
          >
            <View style={styles.loginBtn}>
              <Text style={styles.loginTitle}>登录</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage:{
    flex:1,
  },
  inputUserName:{
    color:'#fff',
    borderBottomWidth:2,
    borderBottomColor:'#acd0fc',
    width:200,
    marginTop:200,
    fontSize:18,
  },
  inputPasswprd:{
    color:'#fff',
    borderBottomWidth:2,
    borderBottomColor:'#acd0fc',
    width:200,
    fontSize:18,
  },
  loginBtn:{
    marginTop:50,
    width:200,
    height:50,
    backgroundColor:'#acd0fc',
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center',
  },
  loginTitle:{
    color:'#fff',
    fontSize:20,
    fontWeight:'600',
  },
  touchableOpacity:{
    opacity:0.9,
  }
})