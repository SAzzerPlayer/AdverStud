
const redux = require('redux');

import DepartmentReducer from './DepartmentReducer';
import EnrolleeReducer from './EnrolleeReducer';
import HomeWorkReducer from './HomeWorkReducer';
import OpportunitiesReducer from './OpportunitiesReducer';
import ScheduleReducer from './ScheduleReducer';
import TeacherReducer from './TeacherReducer';
import UserReducer from './UserReducer';
import WorkReducer from './WorkReducer';
import GlobalReducer from './GlobalReducer';

export default redux.combineReducers({
    department: DepartmentReducer,
    enrollee: EnrolleeReducer,
    opportunity: OpportunitiesReducer,
    homework: HomeWorkReducer,
    schedule: ScheduleReducer,
    teacher: TeacherReducer,
    user: UserReducer,
    work: WorkReducer,
    global: GlobalReducer
});
