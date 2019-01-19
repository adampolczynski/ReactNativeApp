import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import axios from 'axios';
import { IInterest } from '../../types/IInterest';
import { globalInterestsAction } from '../../actions/actions';
import { store } from '../../createReduxStore';
import Interest from './interest';

class InterestsList extends Component<{ interests: IInterest[] }, {}> {

  componentDidMount() {
    axios.get(
        `${API_URL}/interests`, 
        {
           headers: {
               'content-type': 'application/json'
           }
        }
    ).then((res) => {
        if (res.data.success) {
            store.dispatch(globalInterestsAction(res.data.data));
        };
    });

  }
  render() {
      return this.props.interests ? this.props.interests.map((i) => {
        return (
            <View key={`interest-${i.id}-container`} style={{ width: 150, padding: 6, margin: 6, borderWidth: 1 }}>
                    <Interest key={`interest-${i.id}`} interest={i} />
            </View>
        )
      }) : (<Text>{'no interests to load'}</Text>);
  }
}

const mapStateToProps = (state) => {
    return {
        interests: state.interests,
    }
  }

export default connect(mapStateToProps)(InterestsList);