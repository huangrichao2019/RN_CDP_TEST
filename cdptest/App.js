import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';
import DetailsScreen from './pages/DetailsScreen';
import TestPage from './pages/TestPage';
import {NativeModules} from 'react-native';

// 开发依赖
// import GrowingTouch from './GrowingTouch'

// 线上依赖
// import GrowingTouch from 'react-native-growing-touch'


// 定义导航器 可定义默认
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    TestPage: TestPage,
},
{
  initialRouteName: 'Home',
}

);

// 定义导航容器 定义默认页面
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  static first = false;
  state = {
    isEnable: true,
  };

  render() {
    //setUserId 设置登录用户名称
    NativeModules.GrowingCDP.setUserId("lisi");
    return (<AppContainer />);
  }
}
// 等价于
// export default createAppContainer(AppNavigator);