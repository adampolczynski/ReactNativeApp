import * as React from 'react';
import {SignInModal} from './signIn/component';
import {WelcomeModal} from './welcome/component';
import { RegisterModal } from './register/component';
import { connect } from 'react-redux';
import { IModalOpts } from '../../types/IModalOpts';

class ModalConductor extends React.Component<{ modalOpts: IModalOpts}, {}> {
    constructor(props) {
        super(props);
    }   

    render() {
        switch (this.props.modalOpts.name) {
            case 'WELCOME':
              return <WelcomeModal {...this.props}/>;
        
            case 'SIGN_IN':
              return <SignInModal {...this.props}/>;
        
            case 'REGISTER':
              return <RegisterModal {...this.props}/>;
        
            // case 'EDIT_BOX':
            //   return <BoxDetailsModal {...props}/>;
        
            default:
              return null;
          }
    }
}

const mapStateToProps = (state: any) => {
  return {
      modalOpts: state.modalOpts,
  }
}

export default connect(mapStateToProps)(ModalConductor)