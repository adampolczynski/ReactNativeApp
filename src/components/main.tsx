import * as React from 'react';
import { Component } from 'react';
import { AppState, View, Button } from 'react-native';
import Header from './header/component';
import { ModalConductor } from './modals/modalConductor';
import { connect } from 'react-redux';

class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.changeModal = this.changeModal.bind(this);

  }

  componentDidMount() {
    console.warn(this.props)
    //AppState.addEventListener('change', this._handleAppStateChange);
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
        <ModalConductor currentModal={this.props.modalOpts.name}></ModalConductor>        
        <Header />
        
      </View>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { 
    isLoggedIn: state.isLoggedIn,
    modalOpts: state.modalOpts
  };
}

const MainScreenContainer = connect(mapStateToProps)(MainScreen);

export default MainScreenContainer;