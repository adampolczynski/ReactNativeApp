import * as React from 'react';
import { Button, Text, TextInput, View, ToastAndroid } from 'react-native';
// import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalWrapper from '../modalWrapper';
import axios from 'axios';
import { store } from '../../../createReduxStore';
import { loginAction, modalNameAction, modalVisibleAction, userDataAction } from '../../../actions/actions';

const styles = {
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 60
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        color: '#424242',
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         logIn: () => dispatch(loginAction(true))
//     }
// }
export class SignInModal extends React.Component<{},{ email: string, pwd: string }> {
    constructor(props: any) {
        super(props);

        this.state = { email: '', pwd: '' };
        this.signIn = this.signIn.bind(this);
    }

    async signIn(method: string) {
        const x = await axios.post(
            `${API_URL}/login`, 
            {
               email: this.state.email,
               password: this.state.pwd
            },
            {
               headers: {
                   'content-type': 'application/json'
               }
            }
        );
        if (x.data.success) {
            console.log(x.data)
            store.dispatch(loginAction(true));
            store.dispatch(userDataAction(x.data))
            store.dispatch(modalNameAction(''));
            store.dispatch(modalVisibleAction(false));

            ToastAndroid.showWithGravity(
            'Logged into the life oportunity :)',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
            );
            // this.props.logIn();
        }
        console.log(store.getState());
    }
    render() {
        return (
            <ModalWrapper
                title={'sign in'}
                hideText={'Hide modal'}>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around' }}>
                    
                    <View>
                        <Text>
                            Sign in classicaly giving a mail or by facebook
                        </Text>
                    </View>
                    <View style={{ height: 120, borderWidth: 1, borderColor: 'black' }}>
                        <View style={styles.searchSection}>
                            <Icon style={styles.searchIcon} name="envelope" size={20} color="#000"/>
                            <TextInput
                                keyboardType={'email-address'} 
                                style={[styles.input]}
                                onChangeText={(email) => this.setState({email})}
                                value={this.state.email}
                                underlineColorAndroid="transparent"
                                placeholder="placeholder"
                            />
                        </View>

                        <View style={styles.searchSection}>
                            <Icon style={styles.searchIcon} name="key" size={20} color="#000"/>
                            <TextInput 
                                secureTextEntry={true}                               
                                style={[styles.input]}
                                onChangeText={(pwd) => this.setState({pwd})}
                                value={this.state.pwd}
                                underlineColorAndroid="transparent"
                                placeholder="placeholder"
                            />
                        </View>

                        <Button title={'sign in'} onPress={() => this.signIn('classic')}/>
                        
                    </View>
                    
                        
                    <View style={{ flexDirection: 'row', alignContent: 'space-around', alignSelf: 'center', alignItems: 'center'}}>
                        <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={() => this.signIn('facebook')}>
                            Login with Facebook
                        </Icon.Button>
                    </View>
                </View>
            </ModalWrapper>
            );
    }
}