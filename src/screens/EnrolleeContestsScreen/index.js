import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import ContestView from '../../components/ContestView';
import styles from './Style';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

class EnrolleeContestsScreen extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const onPressNavigate = () => {
            this.props.navigation.navigate("EnrolleeContestsDescription");
        };
        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView>
                    <Text style={styles.h1}>КОНКУРСИ</Text>
                    <ContestView onPress={onPressNavigate}/>
                    <ContestView onPress={onPressNavigate}/>
                    <ContestView onPress={onPressNavigate}/>
                    <ContestView onPress={onPressNavigate}/>
                    <ContestView onPress={onPressNavigate}/>
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}

export default EnrolleeContestsScreen;
