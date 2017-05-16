//这里是stacknavigator最基本使用方式，两个屏幕之间进行栈堆切换。
import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';


class Page1 extends React.Component {
  static navigationOptions = {
    title: 'page1',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>page1</Text>
        <Button
          onPress={() => navigate('Second')}
          title="page2"
        />
      </View>
    );
  }
}

class SecondScreen extends React.Component {
  static navigationOptions = {
    title: 'page2',
  };
  render() {
    return (
      <View>
        <Text>page2</Text>
      </View>
    );
  }
}


//我们创建了两个视图组件，再使用react-navigator两个视图组件
 const myApp = StackNavigator({
  First: { screen: FirstScreen },
  Second: { screen: SecondScreen },
});

export default myApp;