//这里是栈堆导航所有的参数设置
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
    //headerBackTitle:'andy',//这个参数用于回退按钮，在下一个页面才能看到
    //headerTruncatedBackTitle:'andy1', //这个参数在headerBackTitle没有生效的时候使用的。
  };
  render() {
    const { navigate } = this.props.navigation;//由此可以navigator对象被赋值给了这个组件的属性navigation，所以我们可以通过这个组件的navigation属性获取这个navigator对象。
    return (
      <View>
        <Text>page1</Text>
        <Button
          onPress={() => navigate('page2', { pa: 'Andy' })}//这里可以穿参数，需要包裹在一个对象中
          title="page2"
        />
      </View>
    );
  }
}

class Page2 extends React.Component {

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>page1的参数值是：{params.pa}</Text>
      </View>
    );
  }
}

Page2.navigationOptions = ({ navigation }) => ({
    title: `page2 ${navigation.state.params.pa}`,//当然也可以使用字符串连接的形势。
    // header:null,//设置为null就会隐藏头部
    // headerTitle:<Text>{navigation.state.params.pa}</Text>,
    headerRight: <Button title="info"/>,
    headerStyle:{width:"100%",height:100},
    // headerTitleStyle:{height:300},
    headerBackTitleStyle:{color:'red',fontSize:100},
    headerTintColor:'red',
    headerPressColorAndroid:'red',
    gesturesEnabled:true,
    
});//箭头函数，这里的()里面只能写表达式。




//我们创建了两个视图组件，再使用react-navigator两个视图组件
const SimpleApp = StackNavigator({
  page1: { screen: Page1 },
  page2: { screen: Page2 },
});

export default SimpleApp;
