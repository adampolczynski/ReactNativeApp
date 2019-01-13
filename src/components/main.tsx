import * as React from 'react';
import { Component } from 'react';
import { AppState, View, Button } from 'react-native';
import Header from './header/component';
import { ModalConductor } from './modals/modalConductor';
import { connect } from 'react-redux';

export class MainScreen extends Component<{}, { isLoggedIn: boolean, currentModal: string, modalOpts: any }> {
  constructor(props: { prop: boolean }) {
    super(props);

    this.changeModal = this.changeModal.bind(this);

  }

  componentDidMount() {
    //AppState.addEventListener('change', this._handleAppStateChange);
    console.log(this.state)
    console.log(JSON.stringify(this.props))
    // console.log('Main on mount, logged in: ' + store.getState().isLoggedIn);
    // console.log('Main on mount, local state logged in: ' + this.state.isLoggedIn);

  }

  // componentWillUnmount() {
  //   AppState.removeEventListener('change', this._handleAppStateChange);
  // }

  // _handleAppStateChange = (nextAppState: string) => {
  //   if (this.state.appState.match(/active/) && nextAppState === 'background') {
  //     console.log('App closing!')
  //   }
  //   //this.setState({appState: nextAppState});
  // }

  changeModal(name: string) {
    this.setState({ currentModal: name });
  }

  render() {
    return (
      <View>
        <ModalConductor changeModal={this.changeModal} currentModal={'asd'}></ModalConductor>        
        <Header changeModal={this.changeModal} />
        
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { 
    isLoggedIn: state.isLoggedIn,
    modalOpts: state.modalOpts
  };
}
export default connect(mapStateToProps)(MainScreen);