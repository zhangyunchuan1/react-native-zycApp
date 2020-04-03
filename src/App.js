import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider } from 'react-redux';
import { View, Text,Button,Image ,StatusBar} from 'react-native';
import store from '../src/Redux/Store'
// import TabNavigator from './Routers/MainTab'
import Router from './Routers/AppRouter';

//路由
function App() {
  return ( 
    <Provider store={store}>
      {/* <StatusBar 
        backgroundColor="#acd0fc"
        translucent={false}
        hidden={false}
        animated={true}
      /> */}
      <StatusBar
        animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
        hidden={false}  //是否隐藏状态栏。
        backgroundColor={'transparent'} //状态栏的背景色
        translucent={true} //指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
        barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')
       >
       </StatusBar>
      {/* <TabNavigator /> */}
      <Router />
    </Provider>
  );
}

export default App;