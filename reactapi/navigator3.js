//这里是navigator的嵌套使用的方式，把一个tab导航嵌入到一个stack导航中去。
import React from 'react';
import {
    AppRegistry,
    Text,
    Button,
    View,
} from 'react-native';
import { TabNavigator,StackNavigator } from "react-navigation";


//page1和page2是两个tab导航的试图。
class Page1 extends React.Component {
  render() {
    return (<Button
            onPress={() => this.props.navigation.navigate('page3', { page:'page1',pa: 'Andy1' })}
            title="page3"
          />)
  }
}

class Page2 extends React.Component {
  render() {
    const { navigate } = this.props.navigation;//一般在这里使用结构赋值。
    return (<Button
            onPress={() => navigate('page3', { page:'page2',pa: 'Andy2' })}
            title="page3"
          />)
  }
}
class Page3 extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.pa}`,//这里为啥可以设置title因为，这里是栈堆导航了。
    headerRight: <Button title="info"  />,//这里在标题的右边添加了一个button
  });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>{params.page}传递的参数：{params.pa}</Text>
      </View>
    );
  }
}



const MainScreenNavigator = TabNavigator({//这个tab的重点就是TabNavigator。这是用来生成tab路由的。
  page1: { screen: Page1 },
  page2: { screen: Page2 },
});

MainScreenNavigator.navigationOptions = {
  title: 'main标题',
};//我们知道虽然这里的MainScreenNavigator是一个导航，但是我们其实以把他当作了一个screen一样的嵌套进了SimpleApp这个路由里，所以可以给他一个screen的title。


const SimpleApp = StackNavigator({//这里自然就是StackNavigator堆路由。
  MainScreenNavigator: { screen: MainScreenNavigator },
  page3: { screen: Page3 },
});
export default SimpleApp;//我们可以观察到这里其实把选项卡路由当成了一个screen带给了SimpleApp，最后注册的时候需要注意要注册SimpleApp。

//这里会有一个警告：View.propTypes has been deprecated and will be removed in a future version of ReactNative. Use ViewPropTypes instead.
//大致的意思就是说View.propTypes会被弃用，请使用ViewPropTypes代替。OK先无视。