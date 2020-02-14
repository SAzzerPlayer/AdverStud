import {createStackNavigator} from 'react-navigation-stack';

import EnrolleeScreen from '../screens/EnrolleeScreen';
import EnrolleePreparingScreen from '../screens/EnrolleePreparingScreen';
import EnrolleeQuestsScreen from '../screens/EnrolleeQuestsScreen';
import EnrolleeContestsScreen from '../screens/EnrolleeContestsScreen';
import EnrolleeQuestsDescriptionScreen from '../screens/EnrolleeQuestsDescriptionScreen';
import EnrolleeContestsDescriptionScreen from '../screens/EnrolleeContestsDescriptionScreen';
import EnrolleeQuestEditScreen from '../screens/EnrolleeQuestEditScreen';


const EnrolleeContestsStackNavigator = createStackNavigator({
    "EnrolleeContestsList":EnrolleeContestsScreen,
    "EnrolleeContestsDescription":EnrolleeContestsDescriptionScreen
},{
    headerMode:'none',
    initialRouteName: 'EnrolleeContestsList'
});

const EnrolleeQuestsStackNavigator = createStackNavigator({
    "EnrolleeQuestsList":EnrolleeQuestsScreen,
    "EnrolleeQuestsDescription":EnrolleeQuestsDescriptionScreen,
    "EnrolleeQuestEdit":EnrolleeQuestEditScreen
},
    {
        headerMode: 'none',
        initialRouteName: 'EnrolleeQuestsList'
    });

const EnrolleeStackNavigator =  createStackNavigator({
        "Enrollee":EnrolleeScreen,
        "EnrolleePreparing":EnrolleePreparingScreen,
        "EnrolleeQuests":EnrolleeQuestsStackNavigator,
        "EnrolleeContests":EnrolleeContestsStackNavigator
    },
    {
        headerMode: 'none',
        initialRouteName: 'Enrollee'
    });

export default EnrolleeStackNavigator;
