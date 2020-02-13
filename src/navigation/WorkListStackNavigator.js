import {createStackNavigator} from 'react-navigation-stack';
import WorkListScreen from '../screens/WorkListScreen';
import WorkEditScreen from '../screens/WorkEditScreen';

const WorkListStackNavigator = createStackNavigator({
        "WorkList":WorkListScreen,
        "WorkEdit":WorkEditScreen
    },
    {
        initialRouteName:"WorkList",
        headerMode:"none"
    });

export default WorkListStackNavigator;
