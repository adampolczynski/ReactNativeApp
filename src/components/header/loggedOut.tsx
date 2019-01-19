import * as React from 'react';
import { Component } from 'react';
import { AppRegistry, Alert, Button, Image, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { modalNameAction } from '../../actions/actions';
import { store } from '../../createReduxStore';
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    textAlign: 'center'
  },
});

export class HeaderLoggedOut extends Component {
 
  render() {
    
    return (
      <View style={[styles.row]}>
        <View style={{height: 50,flex: 1, flexDirection: 'row', justifyContent: 'space-around',  alignSelf: 'flex-start', alignItems: 'center'}}>
        {/* <Icon.Button backgroundColor="#3b5998">
          <Text style={{fontFamily: 'Arial', fontSize: 15}}>Login with Facebook</Text>
        </Icon.Button> */}
        <Button title={'Sign in'} onPress={() => store.dispatch(modalNameAction('SIGN_IN'))} />
          <Text style={{textAlign: 'center'}}>or</Text>
          <Button title={'Create account'} onPress={() => store.dispatch(modalNameAction('REGISTER'))} />
        </View>
      </View>
    );
  }
}
