import {createStackNavigator} from 'react-navigation-stack';
import OpportunitiesScreen from '../screens/OpportunitiesScreen';
import OpportunityEditScreen from '../screens/OpportunityEditScreen';

const OpportunitiesStackNavigator = createStackNavigator({
        "OpportunitiesList":OpportunitiesScreen,
        "OpportunityEdit":OpportunityEditScreen
    },
    {
        initialRouteName : "OpportunitiesList",
        headerMode:'none'
    });

export default OpportunitiesStackNavigator;
