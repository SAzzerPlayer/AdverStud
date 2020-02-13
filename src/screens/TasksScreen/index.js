import React from 'react';
import {View,Text} from 'react-native';
import styles from './Style';
import Button from '../../components/AttentionButton';
import SearchField from '../../components/SearchField';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

export default class extends React.Component{
    constructor(props){
        super(props);
    }

    onPressNavigateTo(routeName,course){
        this.props.navigation.navigate(routeName,{course});
    }
    render(){
        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <Text style={styles.h1}>ДОМАШНЄ ЗАВДАННЯ</Text>
                <Button title={"1 КУРС"}
                        onPress={()=>{this.onPressNavigateTo("TaskCourse",1)}}
                />
                <Button title={"2 КУРС"}
                        onPress={()=>{this.onPressNavigateTo("TaskCourse",2)}}
                />
                <Button title={"3 КУРС"}
                        onPress={()=>{this.onPressNavigateTo("TaskCourse",3)}}
                />
                <Button title={"4 КУРС"}
                        onPress={()=>{this.onPressNavigateTo("TaskCourse",4)}}
                />
                <Button title={"5 КУРС"}
                        onPress={()=>{this.onPressNavigateTo("TaskCourse",5)}}
                />
            </View>
            </HOCSwipeBack>
        );
    }
}
