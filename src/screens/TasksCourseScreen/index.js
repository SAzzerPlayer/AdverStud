import React from 'react';
import {View,Linking,Text} from 'react-native';
import styles from './Style';
import Button from '../../components/AttentionButton';
import SearchField from '../../components/SearchField';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

export default class extends React.Component{
    constructor(props){
        super(props);
    }

    onPressNavigateTo(routeName){
        this.props.navigation.navigate(routeName);
    }
    render(){

        const course = this.props.navigation.getParam("course");

        const onPressLink = () => {
            Linking.openURL("https://www.google.com");
        };

        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                {/*<SearchField/>*/}
                <Text style={styles.h1}>{course}</Text>
                <Button title={"Дедлайни".toUpperCase()} onPress={()=>{this.onPressNavigateTo("TaskDeadline")}}/>
                <Button title={"Матеріали за предметами".toUpperCase()} onPress={onPressLink}/>
            </View>
            </HOCSwipeBack>
        );
    }
}
