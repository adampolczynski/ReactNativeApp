import * as React from 'react';
import { Component } from 'react';
import { AppRegistry, Alert, Button, Image, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { IUserData } from '../../types/IUserData';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
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
export class HeaderLoggedIn extends Component<{ userData: IUserData},{}> {

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
        <Text style={{textAlign: 'center'}}>{`${this.props.userData.user.name}${this.props.userData.user.surname}`}</Text>
        <Text style={{textAlign: 'center'}}>{this.props.userData.user.email}</Text>
        <Text style={{textAlign: 'center'}}>or</Text>
      </View>
    </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData
  }
}

export default connect(mapStateToProps)(HeaderLoggedIn)