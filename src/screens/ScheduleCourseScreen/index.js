import React from 'react';
import {View,Text} from 'react-native';
import styles from './Style';
import Button from '../../components/AttentionButton';
import SearchField from '../../components/SearchField';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

export default class extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.navigation.getParam("course"));
    }
    render(){

        const course = this.props.navigation.getParam("course");

        const onPressNumerator = () => {
            this.props.navigation.navigate("WeekScheduleList",{
                week:"ЧИСЛІВНИК"
            });
        };

        const onPressDenominator = () => {
            this.props.navigation.navigate("WeekScheduleList",{
                week:"ЗНАМЕННИК"
            });
        };

        const onPressMinings = () => {
            this.props.navigation.navigate("MiningList");
        };

        const onPressSessions = () => {
            this.props.navigation.navigate("SessionList");
        };

        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                {/*<SearchField/>*/}
                <Text style={styles.h1}>{course}</Text>
                <Button title={"Числівник".toUpperCase()} active onPress={onPressNumerator}/>
                <Button title={"Знаменник".toUpperCase()} onPress={onPressDenominator}/>
                <Button title={"Відпрацювання".toUpperCase()} onPress={onPressMinings}/>
                <Button title={"Сесія".toUpperCase()} onPress={onPressSessions}/>
            </View>
            </HOCSwipeBack>
        );
    }
}
