import {createStackNavigator} from 'react-navigation-stack';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import TeacherContactScreen from '../screens/TeachersContactsScreen';
import ContestDescriptionScreen from "../screens/EnrolleeContestsDescriptionScreen";
import QuestDescriptionScreen from '../screens/EnrolleeQuestsDescriptionScreen';
import LifeDepartmentDescriptionScreen from '../screens/LifeDepartmentDescriptionScreen';
import TaskDescriptionScreen from '../screens/TasksDeadlineDescriptionScreen';

const SearchResultsStackNavigator = createStackNavigator({
        "SearchResults":SearchResultsScreen,
        "TeacherContact":TeacherContactScreen,
        "ContestDescription":ContestDescriptionScreen,
        "QuestDescription":QuestDescriptionScreen,
        "DepartmentDescription":LifeDepartmentDescriptionScreen,
        "TaskDescription":TaskDescriptionScreen
    },
    {
        initialRouteName : "SearchResults",
        headerMode:'none'
    });

export default SearchResultsStackNavigator;
