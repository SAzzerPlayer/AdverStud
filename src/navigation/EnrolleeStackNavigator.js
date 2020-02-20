import {createStackNavigator} from 'react-navigation-stack';

import EnrolleeScreen from '../screens/EnrolleeScreen';
import EnrolleePreparingScreen from '../screens/EnrolleePreparingScreen';
import EnrolleeQuestsScreen from '../screens/EnrolleeQuestsScreen';
import EnrolleeContestsScreen from '../screens/EnrolleeContestsScreen';
import EnrolleeQuestsDescriptionScreen from '../screens/EnrolleeQuestsDescriptionScreen';
import EnrolleeContestsDescriptionScreen from '../screens/EnrolleeContestsDescriptionScreen';
import EnrolleeQuestEditScreen from '../screens/EnrolleeQuestEditScreen';
import EnrolleePreparingEditScreen from '../screens/EnrolleePreparingEditScreen';
import EnrolleeContestsEditScreen from '../screens/EnrolleeContestsEditScreen';

const EnrolleeContestsStackNavigator = createStackNavigator({
    "EnrolleeContestsList":EnrolleeContestsScreen,
    "EnrolleeContestsDescription":EnrolleeContestsDescriptionScreen,
    "EnrolleeContestsEdit":EnrolleeContestsEditScreen
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

const EnrolleePreparingStackNavigator = createStackNavigator({
    "EnrolleePreparingList":EnrolleePreparingScreen,
    "EnrolleePreparingEdit":EnrolleePreparingEditScreen
},
    {
        headerMode: 'none',
        initialRouteName: "EnrolleePreparingList"
    });

const EnrolleeStackNavigator =  createStackNavigator({
        "Enrollee":EnrolleeScreen,
        "EnrolleePreparing":EnrolleePreparingStackNavigator,
        "EnrolleeQuests":EnrolleeQuestsStackNavigator,
        "EnrolleeContests":EnrolleeContestsStackNavigator
    },
    {
        headerMode: 'none',
        initialRouteName: 'Enrollee'
    });

export default EnrolleeStackNavigator;
