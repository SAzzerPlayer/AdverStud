import React from 'react';
import {View,Text,ScrollView,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import styles from './Style';
import OpportunityView from '../../components/OpportunityView';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

class OpportunitiesScreen extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        const onPressAdd = () => {
            this.props.navigation.navigate("OpportunityEdit",{editMode:false})
        };

        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView style={styles.scroll}>
                    <View style={styles.header}>
                        <View style={styles.empty}/>
                        <Text style={styles.h1}>МОЖЛИВОСТІ</Text>
                        {true && <TouchableOpacity style={styles.add}
                            onPress={onPressAdd}
                        >
                            <Text style={styles.addText}>ДОДАТИ</Text>
                        </TouchableOpacity>}
                        {false && <View style={styles.empty}/>}
                    </View>
                    {this.props.opportunities.map((currElem)=>{
                        const onPressDelete = () => {
                            this.props.deleteOpportunity(currElem);
                            this.props.navigation.popToTop();
                        };
                        return (
                            <OpportunityView
                                data={currElem}
                                navigation={this.props.navigation}
                                onPressDelete={onPressDelete}
                                isOpportunity
                            />
                        );
                    })}
                    {this.props.opportunities.length === 0 && <Text style={styles.h2}>НАЖАЛЬ, ДАНІ ВІДСУТНІ</Text>}
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}

function mapStateToProps(state){
    return {
        opportunities:state.opportunity.arr
    };
}

function mapDispatchToProps(dispatch){
    return {
        deleteOpportunity:(obj)=>dispatch({type:"DELETE_OPPORTUNITY",value:obj})
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(OpportunitiesScreen);
