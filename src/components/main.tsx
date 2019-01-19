import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { AppState, View, Button } from 'react-native';
import Header from './header/component';
import ModalConductor from './modals/modalConductor';
import InterestsList from './interests/interestsList';

class MainScreen extends Component<{ isLoggedIn: boolean },{}> {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <ModalConductor/>        
        <Header style={{ flex: 0.15, flexDirection: 'row' }}/>
        <View style={{ flex: 0.85, flexDirection: 'row', flexWrap: 'wrap'}}>
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