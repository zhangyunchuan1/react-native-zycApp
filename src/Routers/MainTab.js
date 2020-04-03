import React, { Component } from 'react';
import { Image,StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from '../Routers/HomeStack'
import Shop from '../Pages/Tabs/Shop'
import Find from '../Pages/Tabs/Find'
import Mine from '../Pages/Tabs/Mine'

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#1296db',
          inactiveTintColor: '#707070',
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeStackScreen} 
          options={{
            tabBarLabel: '主页',
            tabBarIcon: ({focused}) => {
              if(focused){
                return <Image source={require('../../assets/images/home_tab_selected.png')} style={styles.tab_icon}/>
              }else{
                return <Image source={require('../../assets/images/home_tab.png')} style={styles.tab_icon} />
              } 
            },
          }}
        />
        <Tab.Screen 
          name="Shop" 
          component={Shop} 
          options={{
            tabBarLabel: '购物',
            tabBarIcon: ({focused}) => {
              if(focused){
                return <Image source={require('../../assets/images/shop_tab_selected.png')} style={styles.tab_icon}/>
              }else{
                return <Image source={require('../../assets/images/shop_tab.png')} style={styles.tab_icon} />
              } 
            },
          }}
        />
        <Tab.Screen 
          name="Find" 
          component={Find} 
          options={{
            tabBarLabel: '发现',
            tabBarIcon: ({focused}) => {
              if(focused){
                return <Image source={require('../../assets/images/find_tab_selected.png')} style={styles.tab_icon}/>
              }else{
                return <Image source={require('../../assets/images/find_tab.png')} style={styles.tab_icon} />
              } 
            },
          }}
        />
        <Tab.Screen 
          name="Mine" 
          component={Mine} 
          options={{
            tabBarLabel: '我的',
            tabBarIcon: ({focused}) => {
              if(focused){
                return <Image source={require('../../assets/images/mine_tab_selected.png')} style={styles.tab_icon}/>
              }else{
                return <Image source={require('../../assets/images/mine_tab.png')} style={styles.tab_icon} />
              } 
            },
          }}
        />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab_icon:{
    width:22,
    height:22,
  }
})