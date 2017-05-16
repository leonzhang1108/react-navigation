import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button ,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,StatusBar

} from 'react-native';
import { TabNavigator,StackNavigator,DrawerNavigator,DrawerItems,NavigationActions } from 'react-navigation';//react的包要不能用cnpm来装，用yarn、npm、rnpm都可以装。

const theimg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB0UlEQVRYR82W6zEFQRBGz81ABsiADMhABogAESACIvDIQAaIwM0AGRAB9alp1TvbM/us2tu/pu7eme/0c2bFwrZaWJ+pAHfAN3Ax1pEpAA/AcRLW+nQMxFgAEzfRe2AUxBiAc+AmeSxR2QkgCKXidkgkhgKY0GMS9Vo+KgbWyTIEoCZuQoMh+gIcAM9A5HnupUEcAi9dIegDsJfEPwGt+9ga2AYEoXXRugC8uKLw1Ucd2Ered0LUAHaAN0CeDxE3Rg+xW4IvAWizcq6NAunreR4g7VUK3lM6WudEAF5cnldzmClqby6iNKoYQ4gcoEtchyktmoB5r1ub7gfQHkLf/y0HsBaKDqn1ep8ZYa3cGNkeIB+xCv0V8BRUfnQXlGbEEXAJyKnWyPYACr+FSpo/wHWCiLrP34a1ASUnBGBaVld/tVJrwwhAVa1Lx0yHyfzEU318uP/kAA1nhgIoSkqVmUIq8wWp29B3wqwAeSrMc4tElKrZASSm9Mjs7vdRec0oZgWwORB5ar/lLTwrwEakwEMsUgMbBaApJ4umpYGOrgH1svrbV3it+Erf1ClnpaEXDSJ7BWnozGlyqPVEK70Hpnpdi0bjvdD1JpwzAuFZiwP8AmTYhSHiAv8SAAAAAElFTkSuQmCC';
//这里因为demo的原因，就只弄一个base64的图片作为所有的图标了。

function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    console.log(navigationState);
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}



/*class thedome extends React.Component{
  constructor() {
        super()
        StatusBar.setBarStyle('light-content')
    }
  
  render(){
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Profile'})
      ]
    })
    return (
            <Navigator
                onNavigationStateChange={
                    (prevState, currentState) => {
                        const currentScene = getCurrentRouteName(currentState);
                        const previousScene = getCurrentRouteName(prevState);
                        if (previousScene !== currentScene) {
                            if (lightContentScenes.indexOf(currentScene) >= 0) {
                                StatusBar.setBarStyle('light-content')
                            } else {
                                StatusBar.setBarStyle('dark-content')
                            }
                        }
                    }
                }
            />
        );
  }
}*/





class Homepage extends React.Component{
  static navigationOptions = {
    title:'Homepage',
    headerBackTitle:"back",
    headerTruncatedBackTitle:'back',
  }
  render(){
    const { goBack } = this.props.navigation;
    console.log(this.props.navigation);
    // const { params } = this.props.navigation;
    return (
      <View>
        <Button
          onPress={()=>goBack()}
          title="back"
        />
    </View>
    )
  }
}

class Messagepage extends React.Component{
  static navigationOptions = ({navigation})=>({//动态配置
    title:`message:${navigation.state.params.message}`,
  })
  render(){
    const {navigate} = this.props.navigation;
    const {params} = this.props.navigation.state;
    console.log(this.props.navigation);
    return(
    <View>
      <Text>{params.message}</Text>
    </View>
    )
  }
}


class thedrawer extends React.Component{
  static navigationOptions = ({navigation}) => ({
    
  })

  render(){
    return (<View>
        <FlatList
        data={[{key: 'drawer1'}, {key: 'drawer2'}, {key: 'drawer3'}, {key: 'drawer4'}, {key: 'drawer5'}, {key: 'drawer6'}, {key: 'drawer7'}, {key: 'drawer8'}]}
        renderItem={({item}) =><DrawerItems
          style={styles.listitem} 
          title = {item.key}
          onPress = {()=>navigate('messagepage',{message:item.key})}
        ></DrawerItems>}
      />
      </View>)
  }
}

class Page1 extends React.Component{
  static navigationOptions = {
    tabBarLabel:'消息',
    tabBarIcon:({tintColor})=>(
      <Image
        source={{uri:theimg}}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  }

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View>
        <FlatList
        data={[{key: 'messageA'}, {key: 'messageB'}]}
        renderItem={({item}) =><Button
          style={styles.listitem} 
          title = {item.key}
          onPress = {()=>navigate('messagepage',{message:item.key})}
        />}
      />
      </View>
    )
  }
}

class Page2 extends React.Component{
  static navigationOptions = {
    tabBarLabel:'联系人',
    tabBarIcon:({tintColor})=>(
      <Image
        source={{uri:theimg}}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  }

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>page2</Text>
       <Button
            onPress={() => navigate('homepage', { data: 'Andy2' })}
            title="homepage"
          />
      </View>
    )
  }
}

class Page3 extends React.Component{
  static navigationOptions = {
    tabBarLabel:'空间',
    tabBarIcon:({tintColor})=>(
      <Image
        source={{uri:theimg}}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  }

  render(){
    return (
      <View>
        <Text>page3</Text>
      </View>
    )
  }
}

class Drawer1 extends React.Component{
  static navigationOptions = {
    drawerLabel: 'drawer1',//抽屉
    drawerIcon: ({ tintColor }) => (
      <Image
        source={{uri:theimg}}
        style={[styles.icon, {tintColor: tintColor}]}
      />)
  } 

  render(){
    return (
      <View>
        <Text>drawer1</Text>
      </View>
    )
  }
}

class Drawer2 extends React.Component{
  static navigationOptions = {
    drawerLabel: 'drawer2',//抽屉
    drawerIcon: ({ tintColor }) => (
      <Image
        source={{uri:theimg}}
        style={[styles.icon, {tintColor: tintColor}]}
      />)
  } 

  render(){
    return (
      <View>
        <Text>drawer2</Text>
      </View>
    )
  }
}

const styles =StyleSheet.create({
  icon:{
    width:20,
    height:20,
  },
  listitem:{
    flex:1,
    height:40,
    borderWidth:1,
    marginTop:20,
    borderColor:'#000',

  }
})

const theTab = TabNavigator({
  page1: {screen: Page1},
  page2: {screen: Page2},
  page3: {screen: Page3},
},{
    tabBarOptions: {
    //activeTintColor: '#ffffff',//设置tab条点击之后的颜色。
    labelStyle: {
      fontSize: 12,//tab标签的样式
    },
    style: {
    //backgroundColor: 'blue',//tab条的样式
    },
    // activeBackgroundColor:'#eeeeee',// 设置tab条点击之后的背景颜色。
    // inactiveTintColor:'#7b7b7b',//设置没有被选中的时候的tab条的icon和的颜色
    // inactiveBackgroundColor:'#ffffff',//设置没有被选中的tab条的背景颜色
  }
});

const MyApp = StackNavigator(
  {
    thetab:{screen:theTab},
    homepage:{screen:Homepage},
    messagepage:{screen:Messagepage}
  }
)

const Navigator = DrawerNavigator({
  myApp:{screen:MyApp},
  drawer1:{screen:Drawer1},
  drawer2:{screen:Drawer2},
},{
  // contentComponent: props => <ScrollView><DrawerItems {...props} /></ScrollView>
})

export default Navigator;