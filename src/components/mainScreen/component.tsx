import * as React from 'react';
import { Component } from 'react';
import { View, Button } from 'react-native';
import { HeaderLoggedOut } from '../header/loggedOut';
import { ModalConductor } from '../modals/modalConductor';
import { connect } from 'react-redux';
import { store } from '../../createReduxStore';

export class MainScreen extends Component<{}, { isLoggedIn: boolean, currentModal: string }> {
  constructor(props: { prop: boolean }) {
    super(props);

    this.state = { isLoggedIn: false, currentModal: 'WELCOME' };
    this.changeModal = this.changeModal.bind(this);

    this.checkIfLoggedIn();
    console.warn(store.getState())    
  }

  checkIfLoggedIn() {
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