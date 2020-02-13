import {createStackNavigator} from 'react-navigation-stack';
import TeachersScreen from '../screens/TeachersScreen';
import TeacherContactScreen from '../screens/TeachersContactsScreen';
import TeacherEditScreen from '../screens/TeachersEditScreen';

const TeacherStackNavigator = createStackNavigator({
        "TeachersList":TeachersScreen,
        "TeacherContact":TeacherContactScreen,
        "TeacherEdit":TeacherEditScreen
    },
    {
        headerMode: 'none',
        initialRouteName: 'TeachersList'
    });

export default TeacherStackNavigator;
