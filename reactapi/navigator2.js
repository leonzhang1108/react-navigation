//这里是navigator的选项卡使用方式，两个tab之间进行切换。
import React from 'react';
import {
    AppRegistry,
    Text
} from 'react-native';
import { TabNavigator } from "react-navigation";

class Tab1 extends React.Component {
  static navigationOptions = {
    title:'tab1'//在这里设置的title没有什么用，因为tab导航视图并没有title。但是我们可以使用嵌入stacknavigator的方式来设置title。
  }
  render() {
    return <Text>tab1</Text>
  }
}

class Tab2 extends React.Component {
  render() {
    return <Text>tab2</Text>
  }
}

const myApp = TabNavigator({//这个tab的重点就是TabNavigator。
  tab1: { screen: Tab1 },
  tab2: { screen: Tab2 },
});
export default myApp;

//这里会有一个警告：View.propTypes has been deprecated and will be removed in a future version of ReactNative. Use ViewPropTypes instead.
//大致的意思就是说View.propTypes会被弃用，请使用ViewPropTypes代替。OK先无视。