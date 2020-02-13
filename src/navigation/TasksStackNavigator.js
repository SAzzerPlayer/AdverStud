import {createStackNavigator} from 'react-navigation-stack';
import TasksScreen from '../screens/TasksScreen';
import TasksCourseScreen from '../screens/TasksCourseScreen';
import TasksDeadlineScreen from '../screens/TasksDeadlineScreen';
import TasksDeadlineDescriptionScreen from '../screens/TasksDeadlineDescriptionScreen';
import TasksDeadlineEditScreen from '../screens/TaskDeadlineEditScreen';

const TasksStackNavigator = createStackNavigator({
    "TaskList":TasksScreen,
    "TaskCourse": TasksCourseScreen,
    "TaskDeadline":TasksDeadlineScreen,
    "TaskDeadlineDescription":TasksDeadlineDescriptionScreen,
    "TaskDeadlineEdit":TasksDeadlineEditScreen
},{
    initialRouteName: "TaskList",
    headerMode:"none"
});

export default TasksStackNavigator;
