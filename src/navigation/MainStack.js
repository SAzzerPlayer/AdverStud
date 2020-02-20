import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from '../screens/MainScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import AuthAdminScreen from '../screens/AuthAdminScreen';
import ScheduleStackNavigator from './ScheduleStackNavigator';
import TeacherStackNavigator from './TeacherStackNavigator';
import LifeDepartmentStackNavigator from './LifeDepartmentStackNavigator';
import WorkListStackNavigator from './WorkListStackNavigator';
import TasksStackNavigator from './TasksStackNavigator';
import EnrolleeStackNavigator from './EnrolleeStackNavigator';
import OpportunityStackNavigator from './OpportunityStackNavigator';
import SearchResultsStackNavigator from './SearchResultsStackNavigator';


export default createStackNavigator({
        'Menu':MainScreen,
        'Teachers':TeacherStackNavigator,
        'Schedule':ScheduleStackNavigator,
        'NotFound':NotFoundScreen,
        'Admin':AuthAdminScreen,
        "Opportunities":OpportunityStackNavigator,
        "LifeDepartment":LifeDepartmentStackNavigator,
        "Works":WorkListStackNavigator,
        "Tasks":TasksStackNavigator,
        "Enrollee":EnrolleeStackNavigator,
        "Search":SearchResultsStackNavigator
    },
    {
        navigationOptions:{

        },
        headerMode: 'none',
        initialRouteName: 'Menu'
    });
