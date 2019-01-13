import * as React from 'react';
import { Component } from 'react';
import { AppRegistry, Alert, Button, Image, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export class HeaderLoggedIn extends Component<{ changeModal: Function }> {
  constructor(props: {}) {
    super(props);
  }

  
  render() {

    return (
      <View>
        <View style={{flex: 0.2}}>
            <Text style={{justifyContent: 'center'}}>Login data....</Text>
        </View>
      
      </View>
    );
  }
}

// skip this line if using Create React Native App
// AppRegistry.registerComponent('WelcomeScreen', () => WelcomeScreen);
