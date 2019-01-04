import * as React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalWrapper from '../modalWrapper';
import axios from 'axios';

const apiUrl: string = 'http://192.168.2.131:4000/api';

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

export class SignInModal extends React.Component<{ changeModal: Function },{ email: string, pwd: string }> {
    constructor(props: any) {
        super(props);

        this.state = { email: '', pwd: '' };
        this.signIn = this.signIn.bind(this);
    }

    async signIn(method) {
        const x = await axios.post(
            `${apiUrl}/login`, 
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
            console.log('login success');
        }
        console.log(x.data);
    }
    render() {
        return (
            <ModalWrapper
                title={'sign in'}
                hideText={'Hide modal'}
                changeModal={this.props.changeModal}>
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