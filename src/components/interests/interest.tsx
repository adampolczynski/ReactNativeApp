import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import axios from 'axios';
import { IInterest } from '../../types/IInterest';
import { globalInterestsAction } from '../../actions/actions';
import { store } from '../../createReduxStore';

class Interest extends Component<{ interest: IInterest }, { style: any }> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
        <View>
          <Text>
            {'Created by: '}{this.props.interest.user.name}{' '}{this.props.interest.user.points}
          </Text>
          <Text style={{}}>{'aktywnosc: '}{this.props.interest.activity.name}</Text>
          <Text style={{}}>{'kategoria: '}{this.props.interest.activity.category}</Text>
        </View>
    )
  }
}

export default Interest;