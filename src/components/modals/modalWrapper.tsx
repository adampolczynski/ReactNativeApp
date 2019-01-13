import * as React from 'react';
import { Component } from 'react';
import {
  Alert,
  Button,
  Modal,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { modalVisibleAction } from '../../actions/actions';
import { store } from '../../createReduxStore';

// import { PropTypes } from 'prop-types';

class ModalWrapper extends Component<{ modalOpts: { visible: boolean, name: string }, hideText: string },{}> {
  constructor(props: any) {
    super(props);
    this.state = { modalVisible: true };
  }


  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalOpts.visible}
        onRequestClose={() => {
          store.dispatch(modalVisibleAction(false))
        }}
      >
        <View style={{ marginTop: 22, padding: 20, flex: 1 }}>
          <View style={{ flex: 0.8 }}>
          
            {this.props.children}
            
          </View>
          <View style={{ flex: 0.2 }}>
            <Button
                title={this.props.hideText}
                onPress={() => {
                  store.dispatch(modalVisibleAction(!this.props.modalOpts.visible));
                }}
              />
            </View>
         
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
      modalOpts: state.modalOpts,
  }
}

export default connect(mapStateToProps)(ModalWrapper);