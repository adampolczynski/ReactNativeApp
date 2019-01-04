import * as React from 'react';
import { Button, Text, TextInput } from 'react-native';
import ModalWrapper from '../modalWrapper';

export class RegisterModal extends React.Component<{ changeModal: Function },{ email: string, pwd: string, secPwd: string }> {
    constructor(props: any) {
        super(props);
        console.log('register modal');
        console.log(JSON.stringify(this.props));

        this.state = { email: '', pwd: '', secPwd: '' };
        this.register = this.register.bind(this);
    }

    register() {
    }

    render() {
        return (
            <ModalWrapper
                title={'register'}
                hideText={'Hide modal'}
                changeModal={this.props.changeModal}>
                <TextInput 
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(pwd) => this.setState({pwd})}
                    value={this.state.pwd}
                />
                 <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(secPwd) => this.setState({secPwd})}
                    value={this.state.pwd}
                />
                <Button title={'register'} onPress={this.register}/>
            </ModalWrapper>
            );
    }
}