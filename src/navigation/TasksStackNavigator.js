import {createStackNavigator} from 'react-navigation-stack';
import TasksScreen from '../screens/TasksScreen';
import TasksCourseScreen from '../screens/TasksCourseScreen';
import TasksDeadlineScreen from '../screens/TasksDeadlineScreen';
import TasksDeadlineDescriptionScreen from '../screens/TasksDeadlineDescriptionScreen';

const TasksStackNavigator = createStackNavigator({
    "TaskList":TasksScreen,
    "TaskCourse": TasksCourseScreen,
    "TaskDeadline":TasksDeadlineScreen,
    "TaskDeadlineDescription":TasksDeadlineDescriptionScreen
},{
    initialRouteName: "TaskList",
    headerMode:"none"
});

export default TasksStackNavigator;
