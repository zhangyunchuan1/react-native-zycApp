import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './MainTab'
import Login from '../Pages/Login'
import Loading from '../Pages/Loading'

const Route = createStackNavigator();

// const AppNavigator = createStackNavigator({
//   Loading: {
//       screen: Loading
//   },
//   LoginStack: {
//       screen: Login
//   },
//   MainTab: {
//       screen: TabNavigator
//   }
// }, {
//   initialRouteName: 'Loading',
// });

export default function Router() {
  return (   
    <NavigationContainer>
      <Route.Navigator 
        initialRouteName='Home' 
        screenOptions={{
          headerShown:false
        }}
      >
        <Route.Screen name="Loading"  component={Loading} />
        <Route.Screen name="Login"  component={Login} />
        <Route.Screen name="Home"  component={TabNavigator} />
      </Route.Navigator>
    </NavigationContainer>
  )
}