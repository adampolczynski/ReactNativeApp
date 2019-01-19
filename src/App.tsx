import * as React from 'react';
import { Platform } from 'react-native';
import MainScreen from './components/main';
import { Font, Constants, Permissions, SQLite } from 'expo';
import { store } from './createReduxStore';
import { Provider } from 'react-redux';
import axios from 'axios';
import { locationAccessAction } from './actions/actions';
import { makeTransaction } from './db';

API_URL = 'http://192.168.43.251:4000/api';

class EntryComponent extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    componentWillMount() {

        // wont go in emulator
        if (Platform.OS === 'android' && !Constants.isDevice) {
            console.warn('Location service wont go on emulator');
        } else {
            this._getLocationAsync();
        }

        makeTransaction('CREATE TABLE IF NOT EXISTS btlinfo (id INTEGER PRIMARY KEY AUTOINCREMENT, authToken VARCHAR(50));')

    }
    componentDidMount() {
        Font.loadAsync({
            'FontAwesome': require('react-native-vector-icons/Fonts/FontAwesome.ttf'),
        });

        // check if token in storage is valid 
        // const x = await axios.post(
        //     `${API_URL}/login/TOKEN`,
        //     { 
        //         token: 'asdsad' 
        //     },
        //     {
        //         headers: {
        //             'content-type': 'application/json'
        //         }
        //     }
        // );
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            console.warn('Permission for location not granted');
        } else {
            store.dispatch(locationAccessAction(true));
        }
    }
    render() {
        return (
            <Provider store={store}>
                <MainScreen></MainScreen>
            </Provider>
        );
    }


}

export default EntryComponent;