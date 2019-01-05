import * as React from 'react';
import { Component } from 'react';
import { AppState, View, Button } from 'react-native';
import { HeaderLoggedOut } from './header/loggedOut';
import { ModalConductor } from './modals/modalConductor';
import { connect } from 'react-redux';
import { store } from '../createReduxStore';

export class MainScreen extends Component<{}, { appState: any, isLoggedIn: boolean, currentModal: string }> {
  constructor(props: { prop: boolean }) {
    super(props);

    this.state = { appState: AppState.currentState, isLoggedIn: false, currentModal: 'WELCOME' };
    this.changeModal = this.changeModal.bind(this);

  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    console.log('Main on mount, logged in: ' + store.getState().isLoggedIn);
    console.log('Main on mount, local state logged in: ' + this.state.isLoggedIn);

  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState: string) => {
    if (this.state.appState.match(/active/) && nextAppState === 'background') {
      console.log('App closing!')
    }
    this.setState({appState: nextAppState});
  }

  changeModal(name: string) {
    this.setState({ currentModal: name });
  }

  render() {
    return (
      <View>
        <ModalConductor changeModal={this.changeModal} currentModal={this.state.currentModal}></ModalConductor>        
        <HeaderLoggedOut changeModal={this.changeModal}></HeaderLoggedOut>
        
      </View>
    );
  }
}

export default connect()(MainScreen);