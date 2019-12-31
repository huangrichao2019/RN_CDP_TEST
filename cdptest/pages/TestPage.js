import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  NativeModules
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';


export default class TestPage extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!');
  }
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            
            
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                
              <Button 
                title = "SDK Version"  
                onPress={() =>
                  NativeModules.GrowingCDP.sdkVersion().then(Version => {
                   console.log(`Version is ${Version}`)
                  })
              }>
              </Button>
  
              <Button 
                title = "Enable GDPR"  
                onPress={() =>
                  console.log(NativeModules.GrowingCDP.enableDataCollect())
              }>
              </Button>
  
              <Button 
                title = "Disable GDPR"  
                onPress={() =>
                  console.log(NativeModules.GrowingCDP.disableDataCollect())
              }>
              </Button>

              <Button 
                title = "不触发用户事件,HuangRichao"  
                onPress={() =>{
                  NativeModules.GrowingCDP.clearUserId()
                  NativeModules.GrowingCDP.setUserId("HuangRichao")
                }
              }>
              </Button>

              <Button 
                title = "触发用户事件, LvYuqiang -->  null --> LvYuqiang"  
                onPress={() =>{
                  NativeModules.GrowingCDP.clearUserId()
                  NativeModules.GrowingCDP.setUserId("LvYuqiang")
                  NativeModules.GrowingCDP.clearUserId()
                  NativeModules.GrowingCDP.setUserId("HuangRichao")
                }
              }>
              </Button>

              <Button 
                title = "触发用户事件,HuangRichao --> LvYuqiang"  
                onPress={() =>{
                  NativeModules.GrowingCDP.clearUserId()
                  NativeModules.GrowingCDP.setUserId("HuangRichao")
                  NativeModules.GrowingCDP.clearUserId()
                  NativeModules.GrowingCDP.setUserId("LvYuQiang")
                }
              }>
              </Button>

  
              <Button 
                title = "Clean UserId"  
                onPress={() =>
                  NativeModules.GrowingCDP.clearUserId()
              }>
              </Button>
  
              <Button 
                title = "track埋点事件,带参数"  
                onPress={() =>
                  NativeModules.GrowingCDP.track("haha", {"name":"你好", "title":"世界"})
              }>
              </Button>
  
              <Button 
                title = "触发用户事件,带参数userID,lisi"  
                onPress={() =>
                  NativeModules.GrowingCDP.setUserAttributes({name:"GrowingIO", userID:"lisi"})
              }>
              </Button>
              
              <Button 
                title = "Get DeviceId"  
                onPress={() =>{
                  NativeModules.GrowingCDP.getDeviceId().then(deviceId => {
                    console.log(`deviceId is ${deviceId}`);
                  });
                }
              }>
              </Button>
  
              <Button 
                title = "Get VisitUserId"  
                onPress={() =>
                  NativeModules.GrowingCDP.getVisitUserId().then(visitUserId => {
                    console.log(`visitUserId is ${visitUserId}`)
                  })
              }>
              </Button>
  
              <Button 
                title = "Get SessionId"  
                onPress={() =>
                 NativeModules.GrowingCDP.getSessionId().then(sessionId => {
                   console.log(`sessionId is ${sessionId}`)
                 })
              }>
              </Button>
  
              <Button 
                title = "Set GeoLocation"  
                onPress={() =>
                  NativeModules.GrowingCDP.setGeoLocation(1.233, 23.4553335)
              }>
              </Button>
  
              <Button 
                title = "Clean GeoLocation"  
                onPress={() =>
                  NativeModules.GrowingCDP.clearGeoLocation()
              }>
              </Button>
  
            </View>
              
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  };
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});