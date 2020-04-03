import React, { Component } from 'react';
import { 
  View,
  Text, 
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class Header extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    const {title,back} = this.props
    return (
      <View style={styles.hearder}>
        {
          back?
            <TouchableOpacity onPress={()=>this.props.goBack()}>
              <Image source={require('../../assets/images/header_back.png')}  style={{ width:20,height:20}}/>
            </TouchableOpacity>
          :
            <View style={styles.placeholderView}></View>
        }
        <Text style={{ fontSize:18,color:'#fff',fontWeight:'600'}}>{title}</Text>
        <View style={styles.placeholderView}></View>
        {/* <Image source={require('../../assets/images/header_code.png')}  style={{ width:20,height:20}}/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hearder:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:70,
    backgroundColor:'#acd0fc',
    width:'100%',
    paddingRight:10,
    paddingLeft:10,
    paddingTop: 30,
  },
  placeholderView:{
    width: 20,
    height: 20,
  }
})