//这里是navigator传递参数
import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';


class FirstScreen extends React.Component {
  static navigationOptions = {//这里是设置静态属性，这个视图的导航器的title属性设置为page1。静态方法不会被实例继承。
    title: 'page1',
  };
  render() {
    const { navigate } = this.props.navigation;//由此可以navigator对象被赋值给了这个组件的属性navigation，所以我们可以通过这个组件的navigation属性获取这个navigator对象。
    return (
      <View>
        <Text>page1</Text>
        <Button
          onPress={() => navigate('Second', { user: 'Andy' })}//这里可以传参数，需要包裹在一个对象中
          title="page2"
        />
      </View>
    );
  }
}

class SecondScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `page2： ${navigation.state.params.user}`,//当然也可以使用字符串连接的形势。这里是es6的模版字符串。
  });
  render() {
    const { params } = this.props.navigation.state;//es6的解构赋值。这里的意思是params=this.props.navigation.state.params
    return (
      <View>
        <Text>page1传过来的参数值是：{params.user}</Text>
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
