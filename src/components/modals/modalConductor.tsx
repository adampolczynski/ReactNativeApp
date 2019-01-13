import * as React from 'react';
import {SignInModal} from './signIn/component';
import {WelcomeModal} from './welcome/component';
import { RegisterModal } from './register/component';

export class ModalConductor extends React.Component<{ currentModal: string }, {}> {
    constructor(props) {
        super(props);
        console.log('current modal: ' + this.props.currentModal)
    }   

    render() {
        switch (this.props.currentModal) {
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