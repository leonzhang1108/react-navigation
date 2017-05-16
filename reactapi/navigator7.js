//这里做了一个抽屉导航。抽屉导航一般都做成一个组件最好，可以定义自己的样式啥的。
import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
  Image

} from 'react-native';
import { StackNavigator,DrawerNavigator } from 'react-navigation';

const theimg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB0UlEQVRYR82W6zEFQRBGz81ABsiADMhABogAESACIvDIQAaIwM0AGRAB9alp1TvbM/us2tu/pu7eme/0c2bFwrZaWJ+pAHfAN3Ax1pEpAA/AcRLW+nQMxFgAEzfRe2AUxBiAc+AmeSxR2QkgCKXidkgkhgKY0GMS9Vo+KgbWyTIEoCZuQoMh+gIcAM9A5HnupUEcAi9dIegDsJfEPwGt+9ga2AYEoXXRugC8uKLw1Ucd2Ered0LUAHaAN0CeDxE3Rg+xW4IvAWizcq6NAunreR4g7VUK3lM6WudEAF5cnldzmClqby6iNKoYQ4gcoEtchyktmoB5r1ub7gfQHkLf/y0HsBaKDqn1ep8ZYa3cGNkeIB+xCv0V8BRUfnQXlGbEEXAJyKnWyPYACr+FSpo/wHWCiLrP34a1ASUnBGBaVld/tVJrwwhAVa1Lx0yHyfzEU318uP/kAA1nhgIoSkqVmUIq8wWp29B3wqwAeSrMc4tElKrZASSm9Mjs7vdRec0oZgWwORB5ar/lLTwrwEakwEMsUgMbBaApJ4umpYGOrgH1svrbV3it+Erf1ClnpaEXDSJ7BWnozGlyqPVEK70Hpnpdi0bjvdD1JpwzAuFZiwP8AmTYhSHiAv8SAAAAAElFTkSuQmCC';
const theimg1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB0UlEQVRYR82W6zEFQRBGz81ABsiADMhABogAESACIvDIQAaIwM0AGRAB9alp1TvbM/us2tu/pu7eme/0c2bFwrZaWJ+pAHfAN3Ax1pEpAA/AcRLW+nQMxFgAEzfRe2AUxBiAc+AmeSxR2QkgCKXidkgkhgKY0GMS9Vo+KgbWyTIEoCZuQoMh+gIcAM9A5HnupUEcAi9dIegDsJfEPwGt+9ga2AYEoXXRugC8uKLw1Ucd2Ered0LUAHaAN0CeDxE3Rg+xW4IvAWizcq6NAunreR4g7VUK3lM6WudEAF5cnldzmClqby6iNKoYQ4gcoEtchyktmoB5r1ub7gfQHkLf/y0HsBaKDqn1ep8ZYa3cGNkeIB+xCv0V8BRUfnQXlGbEEXAJyKnWyPYACr+FSpo/wHWCiLrP34a1ASUnBGBaVld/tVJrwwhAVa1Lx0yHyfzEU318uP/kAA1nhgIoSkqVmUIq8wWp29B3wqwAeSrMc4tElKrZASSm9Mjs7vdRec0oZgWwORB5ar/lLTwrwEakwEMsUgMbBaApJ4umpYGOrgH1svrbV3it+Erf1ClnpaEXDSJ7BWnozGlyqPVEK70Hpnpdi0bjvdD1JpwzAuFZiwP8AmTYhSHiAv8SAAAAAElFTkSuQmCC';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',//抽屉
    drawerIcon: ({ tintColor }) => (
      <Image
        source={{uri:theimg}}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };


  render() {
      const { navigate } = this.props.navigation
    return (
      <View>
      <Text>page1</Text>
      <Button
        onPress={() => navigate('Notifications')}//我们可以看到无论在哪一种情况下都可以使用，导航跳转。
        title="to page2"
      />
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={{uri:theimg1}}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View>
      <Text>page2</Text>
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="to page1"
      />
      </View>
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
  }
},
{
      drawerWidth:200,//设置抽屉导航条的宽度。
      drawerPosition:'right'//设置抽屉导航的出来的位置，从左边出来还是从右边出来。
      //contentComponent:""//这里设置的是一个抽屉导航的组件。
      //contentOptions:""//渲染抽屉导航的内容。
});

export default MyApp;