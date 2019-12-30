/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Switch, TouchableNativeFeedback} from 'react-native';
import {NativeModules} from 'react-native';


export default class HomeScreen extends Component {
  state = {
    isEnable: true,
  };

  _onPressButton() {
    console.log('You tapped the button!');
    NativeModules.IntentMoudle.startActivityFromJS(
      'com.cdptest.TestPageActivity',
      null,
    );
  }

  name1 = (param) => {
    console.log('name1 2= '+ param);
  }


  _jumpRNPage(url) {
    console.log("You jump the RN page!");
    this.props.navigation.push(url);
  }

  // 一旦在RN代码中注册了GrowingTouch的弹窗监听，您就必须自己实现click弹窗时的跳转功能
  // 如果不注册GrowingTouch的弹窗监听，那么您可以放心使用
  handleEventPopupListener = (event) => {
    console.log('注册弹窗监听');
   }


  async componentWillMount(event) {
    this.handleEventPopupListener(event);
  }

  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={styles.container}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 841584, padding: 15, fontSize: 50}}>
            Home Screen
          </Text>
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            title="进入详情页"
            onPress={() => this.props.navigation.push('Details')}
          />
          <Button
            title="进入简单页"
            onPress={() => this.props.navigation.push('TestPage')}
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            title="用户张三"
            onPress={() => NativeModules.GrowingCDP.setUserId("zhangsan")}
          />
          <Button
            title="用户李四"
            onPress={() => NativeModules.GrowingCDP.setUserId("lisi")}
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            title="触发一个埋点事件"
            onPress={event => {
              NativeModules.GrowingCDP.track('touch1', {"impOpenCnt":5});
            }}
          />
          <TouchableNativeFeedback onPress={this._onPressButton}>
            <Text style={styles.textContainer}>跳转到原生页面</Text>
          </TouchableNativeFeedback>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            // eslint-disable-next-line no-undef
            paddingTop: Platform.OS === 'ios' ? 50 : 10,
          }}>
          <Text style={{fontSize: 25}}>触达开关</Text>
          <Switch
            style={{marginLeft: 30, transform: [{scaleX: 1.3}, {scaleY: 1.3}]}}
            value={this.state.isEnable}
            onValueChange={value => {
              this.setState({
                isEnable: value,
              });
            }}
          />
        </View> 
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            title="注册弹窗监听"
            onPress={event => {
              console.log('注册弹窗监听');
              this.handleEventPopupListener;
            }}
          />
          <Button
            title="注销弹窗监听"
            onPress={event => {
              console.log('注销弹窗监听');
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textContainer: {
    fontSize:18,
    padding: 5,
    backgroundColor:'#279',
    borderWidth:1,
    borderColor:'#00ff00',
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingTop: 20,
    paddingLeft: 50,
    paddingRight: 50,
    transform: [{scaleX: 1.3}, {scaleY: 1.3}],
  }
})
