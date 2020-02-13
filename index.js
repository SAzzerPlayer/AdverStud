/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import AppContainer from './App';
import {name as appName} from './app.json';
import {Provider,connect} from 'react-redux';

import globalStore from './src/redux/GlobalStore';

//class for adding extra methods
class AppWithStore extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <AppContainer/>
        )
    }
}

const App = () => {
    return (
        <Provider store={globalStore}>
            <AppWithStore/>
        </Provider>
    );
};
AppRegistry.registerComponent(appName, () => App);
