import {createStackNavigator} from 'react-navigation-stack';
import ScheduleScreen from '../screens/ScheduleScreen';
import ScheduleCourseScreen from '../screens/ScheduleCourseScreen';
import WeekScheduleScreen from '../screens/WeeklyScheduleScreen';
import SessionListScreen from '../screens/SessionListScreen';
import TeacherContactScreen from '../screens/TeachersContactsScreen';
import MiningsScreen from '../screens/MiningsScreen';
import WeeklyScheduleEditScreen from '../screens/WeeklyScheduleEditScreen';
import SessionEditScreen from '../screens/SessionEditScreen';
import MiningEditScreen from '../screens/MiningEditScreen';

const ScheduleSessionStackNavigator = createStackNavigator({
        "SessionList":SessionListScreen,
        "SessionEdit":SessionEditScreen,
        "TeacherInfo":TeacherContactScreen
    },
    {
        headerMode: 'none',
        initialRouteName: 'SessionList'
    });

const ScheduleMiningStackNavigator = createStackNavigator({
        "MiningList":MiningsScreen,
        "MiningEdit":MiningEditScreen,
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
        "WeekScheduleEdit":WeeklyScheduleEditScreen,
        "MiningList":ScheduleMiningStackNavigator,
        "SessionList":ScheduleSessionStackNavigator
    },
    {
        headerMode: 'none',
        initialRouteName: 'ScheduleList'
    });

export default ScheduleStackNavigator;
