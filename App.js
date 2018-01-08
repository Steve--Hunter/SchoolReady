// SchoolReady - Help your child get ready for school
// Copyright MaryAnn Hunter, maryann@smtahunter.com
// Developed by Steve Hunter, steve@smtahunter.com
// See GitHub for ReadMe, https://github.com/Steve--Hunter/SchoolReady

import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
          <Text>SchoolReady</Text>
          <Text>Help your child get ready for school.</Text>
          <Button
            onPress={() => navigate('GettingStarted')}
            title="Getting Started"
          />
        </View>
    );
  }
}

class GettingStartedScreen extends React.Component {
  static navigationOptions = {
    title: 'Getting Started',
  };
  render() {
    return (
      <View>
        <Text>Welcome,</Text>
        <Text>Congratulations on your purchase. You have made a great investment in your child’s future learning.</Text>
      </View>
      );
    }
  }

const SchoolReady = StackNavigator({
  Welcome: { screen: WelcomeScreen },
  GettingStarted: { screen: GettingStartedScreen},
});

export default class App extends React.Component {
  render() {
    return <SchoolReady />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
