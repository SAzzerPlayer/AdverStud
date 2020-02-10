import React from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import MainStack from './MainStack';
import LoadingScreen from '../screens/LoadingScreen';
const InitialSwitch = createSwitchNavigator({
        Main:MainStack,
        Loading: LoadingScreen
    },{
        initialRouteName: 'Loading'
    });

export default createAppContainer(InitialSwitch);
