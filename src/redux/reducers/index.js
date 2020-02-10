
const redux = require('redux');

import DepartmentReducer from './DepartmentReducer';
import EnrolleeReducer from './EnrolleeReducer';
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
    schedule: ScheduleReducer,
    teacher: TeacherReducer,
    user: UserReducer,
    work: WorkReducer,
    global: GlobalReducer
});
