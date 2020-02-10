import {createStackNavigator} from 'react-navigation-stack';
import ScheduleScreen from '../screens/ScheduleScreen';
import ScheduleCourseScreen from '../screens/ScheduleCourseScreen';
import WeekScheduleScreen from '../screens/WeeklyScheduleScreen';
import SessionListScreen from '../screens/SessionListScreen';
import TeacherContactScreen from '../screens/TeachersContactsScreen';
import MiningsScreen from '../screens/MiningsScreen';

const ScheduleSessionStackNavigator = createStackNavigator({
        "SessionList":SessionListScreen,
        "TeacherInfo":TeacherContactScreen
    },
    {
        headerMode: 'none',
        initialRouteName: 'SessionList'
    });

const ScheduleMiningStackNavigator = createStackNavigator({
        "MiningList":MiningsScreen,
        "TeacherInfo":TeacherContactScreen
    },
    {
        headerMode: 'none',
        initialRouteName: 'MiningList'
    });

const ScheduleStackNavigator = createStackNavigator({
        "ScheduleList": ScheduleScreen,
        "ScheduleCourseList": ScheduleCourseScreen,
        "WeekScheduleList": WeekScheduleScreen,
        "MiningList":ScheduleMiningStackNavigator,
        "SessionList":ScheduleSessionStackNavigator
    },
    {
        headerMode: 'none',
        initialRouteName: 'ScheduleList'
    });

export default ScheduleStackNavigator;
