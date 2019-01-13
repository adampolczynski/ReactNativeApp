import * as React from 'react';
import { Component } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderLoggedIn from './loggedIn';
import { HeaderLoggedOut } from './loggedOut';

import { connect } from 'react-redux';

class Header extends Component<{ isLoggedIn: boolean }, {}> {
  constructor(props: { isLoggedIn: boolean }) {
    super(props);
  }

  
  render() {

    if (this.props.isLoggedIn) {
        return(
            <HeaderLoggedIn />
        )
    } else {
        return(
            <HeaderLoggedOut />
        )
    }
  }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
    }
  }

export default connect(mapStateToProps)(Header);