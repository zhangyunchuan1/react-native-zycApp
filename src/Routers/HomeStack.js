
import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';

import Header from '../Component/Header'
import HomeScreen from '../Pages/Tabs/Home'
import DetailScreen from '../Pages/Detail'

const HomeStack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          header:({ scene, previous, navigation }) => {
            console.log(scene, previous, navigation)
            return (
              <Header title={'主页'} back={false}/>
            );
          }
        }}
      />
      <HomeStack.Screen 
        name="Detail" 
        component={DetailScreen}
        // options={{
        //   headerShown:false
        // }} 
        options={{
          header:({ scene, previous, navigation }) => {
            console.log(scene, previous, navigation)
            return (
              <Header title={'详情页'} back={true} goBack={navigation.goBack}/>
            );
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,  //横向跳转页面
        }}
        
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;

