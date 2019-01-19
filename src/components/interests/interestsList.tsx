import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import axios from 'axios';
import { IInterest } from '../../types/IInterest';
import { globalInterestsAction } from '../../actions/actions';
import { store } from '../../createReduxStore';
import Interest from './interest';

class InterestsList extends Component<{ interests: IInterest[] }, {}> {
  constructor(props: { isLoggedIn: boolean }) {
    super(props);
  }

  async componentDidMount() {
    const x = await axios.get(
        `${API_URL}/interests`, 
        {
           headers: {
               'content-type': 'application/json'
           }
        }
    );

    if (x.data.success) {
        store.dispatch(globalInterestsAction(x.data.data));
    }

  }
  render() {
      return this.props.interests.map((i) => {
        return (
            <View key={`${i.id}-container`} style={{ width: 150, padding: 6, margin: 6, borderWidth: 1 }}>
                    <Interest key={i.id} interest={i} />
            </View>
        )
      });
  }
}

const mapStateToProps = (state) => {
    return {
        interests: state.interests,
    }
  }

export default connect(mapStateToProps)(InterestsList);