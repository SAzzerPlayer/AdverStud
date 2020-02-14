import React from 'react';
import {View,Text,ScrollView,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import InfoView from '../../components/InfoTextView';
import styles from './Style';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

class EnrolleePreparingScreen extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView style={styles.scroll}>
                    <View style={styles.empty}/>
                    <InfoView/>
                    <InfoView/>
                    <InfoView/>
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}

function mapStateToProps(state){
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch){
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EnrolleePreparingScreen);
