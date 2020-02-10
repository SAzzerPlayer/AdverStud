import {createStackNavigator} from 'react-navigation-stack';
import TeachersScreen from '../screens/TeachersScreen';
import TeacherContactScreen from '../screens/TeachersContactsScreen';

const TeacherStackNavigator = createStackNavigator({
        "TeachersList":TeachersScreen,
        "TeacherContact":TeacherContactScreen
    },
    {
        headerMode: 'none',
        initialRouteName: 'TeachersList'
    });

export default TeacherStackNavigator;
