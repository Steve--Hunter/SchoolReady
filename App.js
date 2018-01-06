// School Ready - Helping your child get ready for school!
// Idea by MaryAnn Hunter, maryann@smtahunter.com
// Coded by Steve Hunter steve@smtahunter.com

import React, { Component } from 'react';



import {
  AppRegistry,
  Text
} from 'react-native';

// Multiple screen navigation
// npm install --save react-navigation, see https://facebook.github.io/react-native/docs/navigation.html
import {
  StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}
