import * as React from 'react';
import { Component } from 'react';
import { AppRegistry, Alert, Button, Image, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { HeaderLoggedIn } from './loggedIn';
import { HeaderLoggedOut } from './loggedOut';


export class Header extends Component<{ isLoggedIn: boolean }, {}> {
  constructor(props: { isLoggedIn: boolean }) {
    super(props);
  }

  
  render() {

    if (this.props.isLoggedIn) {
        return(
            <HeaderLoggedIn changeModal={() => {}}/>
        )
    } else {
        return(
            <HeaderLoggedOut changeModal={() => {}}/>
        )
    }
    return (
      <View>
        <View style={{flex: 0.2}}>
            <Text>Login data....</Text>
        </View>
      
      </View>
    );
  }
}

// skip this line if using Create React Native App
// AppRegistry.registerComponent('WelcomeScreen', () => WelcomeScreen);
