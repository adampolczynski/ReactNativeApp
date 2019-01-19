import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { AppState, View, Button, Text } from 'react-native';
import Header from './header/component';
import ModalConductor from './modals/modalConductor';
import InterestsList from './interests/interestsList';

class MainScreen extends Component<{ isLoggedIn: boolean },{}> {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', marginTop: 36 }}>
        <ModalConductor/>        
        <View style={{ flex: 0.1, flexDirection: 'row' }}>
          <Header />
        </View>
        <View style={{ flex: 0.9, flexDirection: 'row', flexWrap: 'wrap'}}>
          <InterestsList />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { 
    isLoggedIn: state.isLoggedIn,
  };
}

export default connect(mapStateToProps)(MainScreen);