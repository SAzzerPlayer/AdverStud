import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from '../screens/MainScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import AuthAdminScreen from '../screens/AuthAdminScreen';
import OpportunitiesScreen from '../screens/OpportunitiesScreen';
import ScheduleStackNavigator from './ScheduleStackNavigator';
import TeacherStackNavigator from './TeacherStackNavigator';
import LifeDepartmentStackNavigator from './LifeDepartmentStackNavigator';
import WorkListStackNavigator from './WorkListStackNavigator';
import TasksStackNavigator from './TasksStackNavigator';
import EnrolleeStackNavigator from './EnrolleeStackNavigator';

import HOCSwipeBack from '../hoc/GestureRightSwipe';

export default createStackNavigator({
        'Menu':MainScreen,
        'Teachers':TeacherStackNavigator,
        'Schedule':ScheduleStackNavigator,
        'NotFound':NotFoundScreen,
        'Admin':AuthAdminScreen,
        "Opportunities":OpportunitiesScreen,
        "LifeDepartment":LifeDepartmentStackNavigator,
        "Works":WorkListStackNavigator,
        "Tasks":TasksStackNavigator,
        "Enrollee":EnrolleeStackNavigator
    },
    {
        navigationOptions:{

        },
        headerMode: 'none',
        initialRouteName: 'Menu'
    });
