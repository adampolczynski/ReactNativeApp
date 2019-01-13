import * as React from 'react';
import { Component } from 'react';
import { AppState, View, Button } from 'react-native';
import Header from './header/component';
import ModalConductor from './modals/modalConductor';
import { connect } from 'react-redux';
import { IModalOpts } from '../types/IModalOpts';
import { modalNameAction } from '../actions/actions';
import { store } from '../createReduxStore';

class MainScreen extends Component<{ isLoggedIn: boolean },{}> {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.warn(this.props)
    //AppState.addEventListener('change', this._handleAppStateChange);
    // console.log('Main on mount, logged in: ' + store.getState().isLoggedIn);
    // console.log('Main on mount, local state logged in: ' + this.state.isLoggedIn);

  }

  render() {
    return (
      <View>
        <ModalConductor/>        
        <Header />
        
      </View>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { 
    isLoggedIn: state.isLoggedIn,
  };
}

const MainScreenContainer = connect(mapStateToProps)(MainScreen);

export default MainScreenContainer;