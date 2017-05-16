//在顶级组件组件中使用navigator。我在这里做了四个视图，第一个视图到达第二个视图第二个视图到达第三个视图，但其实第四个视图可以到达第一个视图
import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class App extends React.Component {
  someEvent() {
    // call navigate for AppNavigator here:
    this.navigator && this.navigator.dispatch({ type: 'Navigate', routeName, params });
  }
  render() {
    return (
      <AppNavigator ref={nav => { this.navigator = nav; }} />
    );
  }
}

class FirstScreen extends React.Component {
  static navigationOptions = {
    title: 'page1',
  };
  render() {
    const { navigate } = this.props.navigation;//由此可以navigator对象被赋值给了这个组件的属性navigation，所以我们可以通过这个组件的navigation属性获取这个navigator对象。
    return (
      <View>
        <Text>page1</Text>
        <Button
          onPress={() => navigate('Second', { user: 'Andy1' })}//这里可以穿参数，需要包裹在一个对象中
          title="page2"
        />
      </View>
    );
  }
}

class SecondScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
    title: `page2字符串模版 ${navigation.state.params.user}`,//当然也可以使用字符串连接的形势。
  });
  render() {
    const { navigate } = this.props.navigation;//es6的解构赋值。
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>传过来的参数值是：{params.user}</Text>
        <Button
          onPress={() => navigate('Third', { user: 'Andy2' })}//这里可以穿参数，需要包裹在一个对象中
          title="page3"
        />
      </View>
    );
  }
}

class thirdScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
    title: `page3字符串模版 ${navigation.state.params.user}`,//当然也可以使用字符串连接的形势。
  });
  render() {
    const { navigate } = this.props.navigation;//es6的解构赋值。
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>传过来的参数值是：{params.user}</Text>
        <Button
          onPress={() => navigate('Fouth', { user: 'Andy3' })}//这里可以穿参数，需要包裹在一个对象中
          title="page4"
        />
      </View>
    );
  }
}

class fouthScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
    title: `page4字符串模版 ${navigation.state.params.user}`,//当然也可以使用字符串连接的形势。
  });
  render() {
    const { navigate } = this.props.navigation;//es6的解构赋值。
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>传过来的参数值是：{params.user}</Text>
        <Button
          onPress={() => navigate('First', { user: 'Andy4' })}//这里可以穿参数，需要包裹在一个对象中
          title="page1"
        />
      </View>
    );
  }
}

//顺序很重要，如果这里的导航在前面也就会报错，es6的赋值空隙。因为class声明不会被提前。可以看到这里的导航被写成了一个组件，注意只有顶级的导航可以被写成组件，然后去注册。
const AppNavigator = StackNavigator({
  First: { screen: FirstScreen },
  Second: { screen: SecondScreen },
  Third:{screen:thirdScreen},
  Fouth:{screen:fouthScreen}
});