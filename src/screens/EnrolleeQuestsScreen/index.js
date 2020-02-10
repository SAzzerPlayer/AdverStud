import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import QuestView from '../../components/QuestView';
import styles from './Style';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

export default class extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const onPressNavigate = () => {
            this.props.navigation.navigate("EnrolleeQuestsDescription")
        };
        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView style={styles.scroll}>
                    <Text style={styles.h1}>КВЕСТИ</Text>
                    <QuestView onPress={onPressNavigate}/>
                    <QuestView onPress={onPressNavigate}/>
                    <QuestView onPress={onPressNavigate}/>
                    <QuestView onPress={onPressNavigate}/>
                    <QuestView onPress={onPressNavigate}/>
                    <QuestView onPress={onPressNavigate}/>
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}
