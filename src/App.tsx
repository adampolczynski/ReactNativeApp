import * as React from 'react';
import { MainScreen } from './components/mainScreen/component';
import { Font } from 'expo';
import { store } from './createReduxStore';
import { Provider } from 'react-redux';

class EntryComponent extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    componentDidMount() {
        Font.loadAsync({
          'FontAwesome': require('react-native-vector-icons/Fonts/FontAwesome.ttf'),
        });
      }
    render() {
        return(
            <Provider store={store}>
                <MainScreen></MainScreen>
            </Provider>
    );
    }
       
    
}

export default EntryComponent;