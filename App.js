// SchoolReady - Help your child get ready for school
// Copyright MaryAnn Hunter, maryann@smtahunter.com
// Developed by Steve Hunter,  steve@smtahunter.com
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
        let hello = new Sound('BahBow.mp3', Sound.MAIN_BUNDLE, (error) );
          <Text>SchoolReady</Text>
          <Text>Help your child get ready for school.</Text>
          <Button
            onPress={() => navigate('GettingStarted')}
            title="Getting Started"
          />
          <Button
            onPress={() => navigate('Contents')}
            title="Contents"
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

  class ContentsScreen extends React.Component {
    static navigationOptions = {
      title: 'Contents',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
          <View>
            <Text>Contents</Text>
            <Text></Text>
            <Button
              onPress={() => navigate('Activity1')}
              title="Activity 1 - Saying the Alphabet"
            />
          </View>
      );
    }
  }

  class Activity1Screen extends React.Component {
    static navigationOptions = {
      title: 'Activity 1',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
          <View>
            <Text>Activity 1</Text>
            <Text></Text>
            <Button
              onPress={() => navigate('Activity1Letter', { letter: 'a' })}
              title="aA"
            />
          </View>
      );
    }
  }

  class Activity1LetterScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title: 'Saying the Alphabet',
    });
    render() {
      const { params } = this.props.navigation.state;
      return (
          <View>
            <Text>Saying the Alphabet - {params.letter}</Text>
            <Text></Text>
            <Text>Letter name: </Text>
          </View>
      );
    }
  }

const SchoolReady = StackNavigator({
  Welcome: { screen: WelcomeScreen },
  GettingStarted: { screen: GettingStartedScreen},
  Contents: { screen: ContentsScreen },
  Activity1: { screen: Activity1Screen },
  Activity1Letter: { screen: Activity1LetterScreen },
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
