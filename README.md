## Navigator导航，多页面应用必不可少的选择。

社区主推React Navigator组件，React Navigation的路由写法使其非常容易扩展导航逻辑，或是整合到redux中。由于路由可以嵌套使用，因而开发者可以根据不同页面编写不同的导航逻辑，且彼此互不影响。

# react-navigetor
navigator允许你定义自己的应用导航结构。navigator同样可以渲染一些公共的元素样式，比如头标题和tab条，这些你都可以自己设置。

Under the hood，navigator就是一个react组件
react-navigator包含如下几个方法来帮助你创建导航。

1、Stacknavigator，堆导航，每次渲染一个视图，并且提供两个视图时间的过度效果。当新的视图被打开展示的时候，这个视图就会被放到这个堆的最上方。

2、tabnavigator，tab导航，渲染一个tab条，来让用户可以在几个视图之间进行选择。

3、DrawerNavigator，抽屉导航，渲染一个从左边画出来的抽屉导航。（类似于QQ的那个左边画出来的导航。）

# StackNavigator  
为你的应用提供一种在栈堆最上方的视图之间的切换方式（ 有点像单页面应用）

默认情况下，StackNavigator配置很想原生的iOS和Android的导航的视图和操作反馈：iOS上的新屏幕从右侧滑出，从Android的底部渐隐。在iOS上，StackNavigator也可以配置为模式样式，屏幕从底部滑入。
```
class MyHomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Profile', {name: 'Lucy'})}
        title="Go to Lucy's profile"
      />
    );
  }
}

const ModalStack = StackNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Profile: {
    path: 'people/:name',
    screen: MyProfileScreen,
  },
});
```
API定义 
```
StackNavigator(RouteConfigs, StackNavigatorConfig)
```
### RouteConfigs  
路由配置对象是从路由名称到路由配置的映射，它告诉导航器要为这个路由的呈现什么内容。
```
StackNavigator({
  Profile: {
    //'ProfileScreen' 是一个react组件，这个组件会成为这个视图的主内容。
    screen: ProfileScreen,
    //当这个组件被栈堆导航器加载的时候，他会被给予一个navigation属性，这个属性的属性值就是导航器对象。
    //可选项：当使用深度链接或者使用react-navigator在一个web app中的时候，这个path会被使用到的。
    path: 'people/:username',
    //具体的操作和路由参数会从这个path参数重获取。
    //可选项：覆盖视图的navigationOptions。
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.username}'s Profile'`,
    }),
  },
  ...MyOtherRoutes,
});
```
## StackNavigatorConfig  
### 路由选项：

+ initialRouteName - 设置堆栈的默认视图。必须匹配路由配置中的一个key值。
  
+ initialRouteParams -设置默认路由的参数
  
+ navigationOptions - 用于视图的默认navigator选项
  
+ paths - 路由配置中设置的路径的覆盖映射
  
### 视觉选项：

+ mode - 定义渲染和转换的样式：
  
> card - 使用标准的iOS和Android屏幕转换方式。默认为card。
      
> modal - 使屏幕从底部滑入，这是普通的iOS模式。只适用于iOS，对Android无影响。
      
+ headerMode - 指定标题应如何呈现：

>float - 渲染一个保持在顶部的标题，并且随着画面的改变而呈现动画。这是iOS上的常见模式。

>screen - 每个视图都有一个固定在其上的标题，标题与屏幕一起淡入淡出。这是Android上的常见模式。

>none - 不会显示标题。

+ cardStyle - 使用这个属性覆盖或扩展堆叠中单个卡的默认样式。

+ transitionConfig - 一个返回覆盖默认屏幕转换方式的对象的函数。
  
+ onTransitionStart - 转换动作开始的时候触发的钩子函数。
  
  
+ onTransitionEnd - 转换动作结束之后触发的钩子函数。

### 视图导航选项 
+ title 字符串，可以作为一个headertitle和tabbarlabel备用header React元素或一个传入HeaderProps参数返回一个React元素的函数，以显示为标题。设置null来隐藏标题。

+ headerTitle 
标题使用的字符串或React元素。不设置这个参数的话，默认取title。
+ headerBackTitle 
iOS上的后退按钮使用的标题字符串或设置null来隐藏标签。不设置这个参数的话，默认取title。
+ headerTruncatedBackTitle 
当返回按钮没有作用在视图上时使用的标题字符串。默认为"Back"
+ headerRight 
React元素展示在标题的右侧
+ headerLeft 
React元素显示在标题的左侧
+ headerStyle 
标题的样式对象
+ headerTitleStyle 
标题组件的样式对象
+ headerBackTitleStyle 
后退标题的样式对象
+ headerTintColor 
可感染标题颜色（通常用在主题的转换上，当父组件改变tintColor这个属性的时候，子组件的tintColor也会跟着改变。）
+ headerPressColorAndroid 
颜色纹理（存疑）（Android> = 5.0）
+ gesturesEnabled 
是否可以使用手势关闭此屏幕。在iOS上默认为true，在Android上为false。
Navigator Props
一个创建由StackNavigator(...)创建的导航器组件携带以下属性：
+ screenProps - 传递额外的选项给子视图，例如：
```
const SomeStack = StackNavigator({
    // config
});
<SomeStack
  screenProps={/*这个属性会被以this.props.screenProps方式传递给视图组件*/}
/>
```

# TabNavigator  
使用tabnavigator可以很轻松地创建tab选项卡。
```
class MyHomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./chats-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./notif-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const MyApp = TabNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});
```
API定义 
```
TabNavigator(RouteConfigs, TabNavigatorConfig)
```
## RouteConfigs  
路由CONFIGS对象是一个从路由名称到路由配置的映射，它告诉导航这个路由要去呈现什么，参见例子StackNavigator

## TabNavigatorConfig  
+ tabBarComponent- 要用作标签栏的组件，例如 TabBarBottom（这是iOS上的默认设置），TabBarTop（这是Android上的默认设置）
+ tabBarPosition- 标签栏的位置，可以是'top'或'bottom'
+ swipeEnabled - 是否允许在tab之间进行滑动
+ animationEnabled - 是否在更改tab时进行动画
+ lazy - 是否使用懒加载，根据需要渲染标签，而不是提前渲染。
+ tabBarOptions - 配置tab条，如下所示。
几个选项被传递到底层路由器来修改导航逻辑：

    > initialRouteName - 第一次加载时初始标签路由的routeName

    > order - 定义选项卡顺序的routeNames数组

+ paths - 将routeName映射到路径配置，该配置将覆盖routeConfigs中设置的路径。
+ backBehavior - 按 back 键是否跳转到第一个 Tab， none 为不跳转
tabBarOptionsfor TabBarBottom （iOS上的默认tab条）
+ activeTintColor - 活动tab的标签和图标颜色
+ activeBackgroundColor - 活动tab的背景颜色
+ inactiveTintColor - 不活动tab的标签和图标颜色
+ inactiveBackgroundColor - 非活动tab的背景颜色
+ showLabel - 是否显示tab的标签，默认为true
+ style -tab条的样式对象
+ labelStyle -tab标签的样式对象
例：
```
tabBarOptions: {
  activeTintColor: '#e91e63',
  labelStyle: {
    fontSize: 12,
  },
  style: {
    backgroundColor: 'blue',
  },
}
```
### tabBarOptionsforTabBarTop （Android上的默认tab条） 
+ activeTintColor - 活动tab的标签和图标颜色
+ inactiveTintColor - 不活动tab的标签和图标颜色
+ showIcon - 是否显示tab的图标，默认值为false
+ showLabel - 是否显示tab的标签，默认为true
+ upperCaseLabel - 是否使tab标签大写，默认为true
+ pressColor - 颜色纹理（Android> = 5.0）
+ pressOpacity - 按压tab的透明度（iOS和Android <5.0 only）
+ scrollEnabled - 是否启用可滚动tab条
+ indicatorStyle - tab指示器的样式对象（选项卡底部的线）
+ labelStyle - tab标签的样式对象
+ iconStyle - tab图标的样式对象
+ style - tab条的样式对象
例：
```
tabBarOptions: {
  labelStyle: {
    fontSize: 12,
  },
  style: {
    backgroundColor: 'blue',
  },
}
```
#### 屏幕导航选项 
+ title 
标题可以用作headerTitle和tabBarLabel的备用
tabBarVisibleTrue或false显示或隐藏tab条，如果未设置，则默认为true

+ tabBarIcon 
React Element或者一个给定参数{ focused: boolean, tintColor: string }返回一个React.Element的函数，以在tab栏中显示

+ tabBarLabel 
React元素或者一个给定参数{ focused: boolean, tintColor: string }返回一个React.Element的函数或者就是标题的string，以在标签栏中显示。当这个属性未定义时，使用title。隐藏tab标签，请参见上一节titletab
BarOptions.showLabel。

#### Navigator Props
一个创建由TabNavigator(...)创建的导航器组件携带以下属性：
   + screenProps - 传递额外的选项给子视图，例如：
```   
const TabNav = TabNavigator({
  		// config
});
<TabNav screenProps={/* this prop will get passed to the screen components as this.props.screenProps */}
/>
```

# DrawerNavigator  
用于轻松设置带抽屉导航的视图。
```
class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./chats-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./notif-icon.png')}
        style={[styles.tabIcon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyApp = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});
```
使用DrawerOpen和DrawerClose来，分别打开和关闭抽屉
```
this.props.navigation.navigate('DrawerOpen'); // open drawer
this.props.navigation.navigate('DrawerClose'); // close drawer
```
API定义 
```
DrawerNavigator(RouteConfigs, DrawerNavigatorConfig)
```
### RouteConfigs  
路由CONFIGS对象是从路由名称映射到一个路由配置，它告诉导航这个路由该呈现什么，参见StackNavigator的例子。
#### DrawerNavigatorConfig  
+ drawerWidth - 抽屉的宽度
+ drawerPosition- 抽屉的位置，选项是left或right。默认left
+ contentComponent - 用于呈现抽屉内容的组件，例如导航项。从抽屉接收navigation的属性props。默认为DrawerItems。有关详细信息，请参阅下文。
+ contentOptions - 配置抽屉内容，见下文。
示例： 
默认DrawerView是不可滚动。要实现可滚动View，您必须使用contentComponent属性定制容器，如下面的示例所示。
```
{
  drawerWidth: 200,
  drawerPosition: 'right',
  contentComponent: props => <ScrollView><DrawerItems {...props} /></ScrollView>
}
```
#### 几个选项被传递到底层路由器来修改导航逻辑：
  + initialRouteName - 初始路由的routeName。
  + order - 定义抽屉顺序的routeNames数组。
  + paths - 将routeName映射到路径配置，该配置将覆盖routeConfigs中设置的路径。
  + backBehavior - 后退按钮是否会切换到初始路线？如果是的话，设置为initialRoute，否则none。默认为行为initialRoute。 

#### Providing a customcontentComponent 

您可以轻松地通过react-navigation覆盖所使用的默认组件
```
import { DrawerItems } from 'react-navigation';

const CustomDrawerContentComponent = (props) => (
  <View style={style.container}>
    <DrawerItems {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```
#### contentOptions for DrawerItems 
  + activeTintColor - 活动tab的标签和图标颜色
  + activeBackgroundColor - 活动tab的背景颜色
  + inactiveTintColor - 无效tab的标签和图标颜色
  + inactiveBackgroundColor - 非活动tab的背景颜色
  + style - 内容部分的样式对象
  + labelStyle- 当你的标签是字符串时，样式对象将覆盖内容中Text部分的样式
示例： 
```
contentOptions: {
  activeTintColor: '#e91e63',
  style: {
    marginVertical: 0,
  }
}
```
#### Screen Navigation Options
+ title 
标题可以用作headerTitle和drawerLabel的备用
drawerLabel 
字符串，React元素或一个给定参数{ focused: boolean, tintColor: string }返回React.Element的函数，显示在抽屉侧边栏中。当为定义时，使用title
+ drawerIcon 
React Element或一个给定参数{ focused: boolean, tintColor: string }返回一个React.Element函数，显示在抽屉侧边栏中
#### Navigator Props
一个创建由DrawerNavigator(...)创建的导航器组件携带以下属性：
  + screenProps - 传递额外的选项给子视图，例如：
  ```
const DrawerNav = DrawerNavigator({
  // config
});

<DrawerNav
  screenProps={/* this prop will get passed to the screen components and nav options as props.screenProps */}
/>
```
嵌套DrawerNavigation 
请记住，如果您嵌套DrawerNavigation，抽屉将显示在父导航下方。
