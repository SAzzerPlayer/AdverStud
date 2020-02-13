import {createStackNavigator} from 'react-navigation-stack';
import LifeDepartmentListScreen from '../screens/LifeDepartmentListScreen';
import LifeDepartmentDescriptionScreen from '../screens/LifeDepartmentDescriptionScreen';
import LifeDepartmentEditScreen from '../screens/LifeDepartmentEditScreen';


const LifeDepartmentStackNavigator = createStackNavigator({
        "LifeDepartmentList":LifeDepartmentListScreen,
        "LifeDepartmentDescription":LifeDepartmentDescriptionScreen,
        "LifeDepartmentEdit":LifeDepartmentEditScreen
    },
    {
        initialRouteName : "LifeDepartmentList",
        headerMode:'none'
    });

export default LifeDepartmentStackNavigator;
