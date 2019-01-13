import * as React from 'react';
import { MainScreen } from './components/main';
import { Font } from 'expo';
import { store } from './createReduxStore';
import { Provider } from 'react-redux';
import axios from 'axios';

const apiUrl: string = 'http://192.168.43.251:4000/api';

class EntryComponent extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    async componentDidMount() {
        Font.loadAsync({
            'FontAwesome': require('react-native-vector-icons/Fonts/FontAwesome.ttf'),
        });

        // check if token in storage is valid 
        const x = await axios.post(
            `${apiUrl}/login/TOKEN`,
            { 
                token: 'asdsad' 
            },
            {
                headers: {
                    'content-type': 'application/json'
                }
            }
        );

        console.log(x.data)
        console.log(store.getState())
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