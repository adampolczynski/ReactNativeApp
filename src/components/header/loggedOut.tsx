import * as React from 'react';
import { Component } from 'react';
import { AppRegistry, Alert, Button, Image, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 40,
    height: 100
  },
  text: {
    textAlign: 'center'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    alignSelf: 'center'
  }
});

export class HeaderLoggedOut extends Component {
  constructor(props: {}) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.register = this.register.bind(this);
  }
 
  signIn() {}
  register() {}

  mapStateToProps(state){
    return {
        nameAsProps: state.username,
    }
  }
  
  render() {
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={[styles.row]}>
        <View style={{flex: 0.2}}>
            <Image source={pic} style={styles.image} />
        </View>
        <View style={{height: 50,flex: 0.8, flexDirection: 'row', justifyContent: 'space-around',  alignSelf: 'flex-start', alignItems: 'center'}}>
        {/* <Icon.Button backgroundColor="#3b5998">
          <Text style={{fontFamily: 'Arial', fontSize: 15}}>Login with Facebook</Text>
        </Icon.Button> */}
        <Button title={'Sign in'} onPress={() => this.props.changeModal('SIGN_IN')} />
          <Text style={{textAlign: 'center'}}>or</Text>
          <Button title={'Create account'} onPress={() => this.props.changeModal('REGISTER')} />
        </View>
      </View>
    );
  }
}
