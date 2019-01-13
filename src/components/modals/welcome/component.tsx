import * as React from 'react';
import { Component } from 'react';
import { AppRegistry, Alert, Button, Image, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import ModalWrapper from '../modalWrapper';

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center'
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  }
});

export class WelcomeModal extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <ModalWrapper 
      title={'sign in'}
      hideText={'Got it, move on'}>
        <View style={styles.column}>
          <Text style={styles.text}>Welcome to the BackToLife application, made to integrate people in real life</Text>
          <Image source={pic} style={[styles.image]}/>
          <Text style={[styles.text]}>Create account, add interests, share them and be productive!</Text>  
        </View>    
      </ModalWrapper>
      
    );
  }
}


// skip this line if using Create React Native App
// AppRegistry.registerComponent('WelcomeScreen', () => WelcomeScreen);