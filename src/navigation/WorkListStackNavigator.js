import {createStackNavigator} from 'react-navigation-stack';
import WorkListScreen from '../screens/WorkListScreen';

const WorkListStackNavigator = createStackNavigator({
        "WorkList":WorkListScreen,
        "WorkDescription":WorkListScreen
    },
    {
        initialRouteName:"WorkList",
        headerMode:"none"
    });

export default WorkListStackNavigator;
