import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
  Image
} from 'react-native';
import { TabNavigator } from 'react-navigation';

const theimg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEA0lEQVRYR8WXzXUaWRCFv8Ie4aW0mWlWRhEMikA4AksRjJoEjCIwjsAoARpHYBSBcQQiA+MVzGyEd5bnWG9O1eu/1w20JC+mz9E5Qnr96tatW7cK4X9+5JfiJ6uuvR93lk+95+EAkttD3L+vkfszQH+2PTNca4b8dk18tHkIqGYAGpi7t8DQLnTuM8Ic0KyzzJWJLk7OEP4ENiBjOLhqArIfQLK6AHmPQxA3hhfjpgsxwN+HOBkiOJCY+I/ZLjZ2A0hWI5C3OPcBeTFsDFyNYCW7myK8Nvbi6GobiO0AkvUYeANcEkf6+9OfLJEdd9UBeNqTILipXTQTFcH1XtUnqz60TnFugbQ/G3M5CDmvliME4APd4Nw1g86FxUvWKr73FQrqzHixfgJ6pbNLaJ0T/75gspoimkT7uFzOEIAeQpXc7qbI+yB66RVx5LsgB+ReEXe0G/yTv9vqW0BNxsnMhBhHJyZOd7dEmOZ3AQUAn/2XkPr1GEefQVTOCibrBbhFzpIH5sDFxJ1pDir5+wzcR2idpKC8sHHHWRlLANZDHCMG0WGYFV0GnX5QgslqDrJhEHlD8vTfQqXGeVIpW/m5QtwFAMuKZX5pQHeagf0t1Qm8CzpksloickMcnRcMrEbmB0FS6xm4wyypMgN1Cq226wXCSyCj9gLHV6TdD7zB1G96UXbm4LRsylAo2ExDcWSxPYDknx7c30BFWAW9I9OCb8NFbkxWY7Xe+w9WUwWhZUR6/lxrXHPBHGj7SBNIAWToS1RX+q72sfAL/dem2l47X88B+GQrAAp1NsXHhGgcqnF92cretksaAIS9vQ9FmQHHt9w7mpAXAKwVKyKsW2XaYjqO0x1ABXZw6Y1KNXCvYpvmGrA+NzdcgFxt0YC3+kCE3sl0ts8Dc8m6QGe9jWPVoI3ZW2ifhF2Qmk62Lzjp+Uno3hF3RqG3SC8ztzIDGuAv4uio6ONsDlR8wIm25qjmA8gi9JF0pOMVb/dO1pvyuyUAWSuWymD+vssJIXBIs+ImJ8wmbZFQdRjNEXlJHB17f7C94NSGSfl56iywMocsVcZxxkLqXoW7jYmjyxKoN7W2y8dt61U+DZGPts7pMMt3grDVty0k6cRK6XzMPuC+zxA5zcly7ivy7Ax+9mpLTnpo+0o2WescP80XSr//ZxNx3rwR6dnWAg7m8KMPLgmWnFI5d+yED1somzynoN1OFsuL72fdHUpGtNU28+VUF5DLYAPa65LmCbrGde17RO2RDdK+KIbRfsv1E87XVs1qhns2Q9w3E5t1i07B5w75mX1r8oHNK0pr25Y4zd+Mspf8qNVFtW+t+suP94KHAygH9KLsQuswnQWPhbPMdsenAXhsuD3n/wM7lSU/YhaMrgAAAABJRU5ErkJggg==';

class Page1 extends React.Component {
  static navigationOptions = {
    title:'andy',
    //tabBarVisible:false,
    tabBarLabel: 'page1',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={{uri:theimg}}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('page2')}
        title="page2"
      />
    );
  }
}

class Page2 extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'page2',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={{uri:theimg}}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="back"
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
  page1: {
    screen: Page1,
  },
  page2: {
    screen: Page2,
  },
}, {
  tabBarOptions: {
    swipeEnabled:true,
    animationEnabled:true,
    activeTintColor: '#e91e63',
  },
});

export default MyApp;