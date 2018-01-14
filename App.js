// SchoolReady - Help your child get ready for school
// Copyright MaryAnn Hunter, maryann@smtahunter.com
// Developed by Steve Hunter,  steve@smtahunter.com
// See GitHub for ReadMe, https://github.com/Steve--Hunter/SchoolReady

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Sound from 'react-native-sound';

const bahbow = new Sound('bahbow.mp3', Sound.MAIN_BUNDLE);



// Screens
class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (

        <View style={styles.splashpage}>

          <View style={styles.splashimage}>
            <Image  source={require('./images/WelcomeScreen.png')} />

          </View>

          <View>

            <Text>SchoolReady</Text>
            <Text>Help your child get ready for school.</Text>
            <Button
              onPress={() => navigate('GettingStarted')}
              title="Getting Started"
            />
            <Button
              onPress={() => navigate('Contents')

              }
              title="Contents"
            />
          </View>

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
            <View style={styles.row}>
                <View style={[styles.box, styles.boxorange]}>
                  <Text style={styles.boxtext} onPress={() => navigate('Activity1Letter', { letter: 'a' })}>aA</Text>
                </View>
                <View style={[styles.box, styles.boxwhite]}></View>
                <View style={[styles.box, styles.boxorange]}></View>
                <View style={[styles.box, styles.boxwhite]}></View>
            </View>
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
          <View style={styles.splashpage}>
            <Text>Saying the Alphabet - {params.letter}</Text>
            <Text></Text>
            <Text>Letter name: </Text>
            <View style={styles.animatedgifletter}>
              <Image source={require('./images/Activity1DrawLetterA.gif')} />
            </View>
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
  // Boxes
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  box: {
    flex: 1,
    height: 100,
    backgroundColor: '#333',
  },
  boxwhite: {
    backgroundColor: 'white'
  },
  boxorange: {
    backgroundColor: 'orange'
  },
  // text
  boxtext: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 60,
  },
  // page layouts
  splashpage: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  },
  splashimage: {
      flex: 1,
      justifyContent: 'center',
      width: undefined,
      height: undefined,
      resizeMode: 'cover'
  },
  splashfooter: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start'
  },
animatedgifletter: {
    flex: 1,
    flexDirection: 'column',
  },
});
