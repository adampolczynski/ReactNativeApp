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

// import { PropTypes } from 'prop-types';

class ModalWrapper extends Component<
  { changeModal: Function, hideText: string, title: string },
  { modalVisible: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { modalVisible: true };
  }

  setModalVisible(vis: boolean) {
    this.setState({ modalVisible: vis });
    this.props.changeModal('');
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.setModalVisible(false);
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
                  this.setModalVisible(!this.state.modalVisible);
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
      modalVisible: state.modalVisible,
  }
}

export default connect(mapStateToProps)(ModalWrapper);