import {createStackNavigator} from 'react-navigation-stack';
import LifeDepartmentListScreen from '../screens/LifeDepartmentListScreen';
import LifeDepartmentDescriptionScreen from '../screens/LifeDepartmentDescriptionScreen';

const LifeDepartmentStackNavigator = createStackNavigator({
        "LifeDepartmentList":LifeDepartmentListScreen,
        "LifeDepartmentDescription":LifeDepartmentDescriptionScreen
    },
    {
        initialRouteName : "LifeDepartmentList",
        headerMode:'none'
    });

export default LifeDepartmentStackNavigator;
