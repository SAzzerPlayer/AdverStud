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
                {/*<SearchField/>*/}
                <Text style={styles.h1}>РОЗКЛАД</Text>
                <Button title={"1 Курс".toUpperCase()}
                        onPress={()=>{this.onPressNavigateTo("ScheduleCourseList",'1 КУРС')}}
                />
                <Button title={"2 Курс".toUpperCase()}
                        onPress={()=>{this.onPressNavigateTo("ScheduleCourseList","2 КУРС")}}
                />
                <Button title={"3 Курс".toUpperCase()}
                        onPress={()=>{this.onPressNavigateTo("ScheduleCourseList","3 КУРС")}}
                />
                <Button title={"4 Курс".toUpperCase()}
                        onPress={()=>{this.onPressNavigateTo("ScheduleCourseList","4 КУРС")}}
                />
                <Button title={"5 Курс".toUpperCase()}
                        onPress={()=>{this.onPressNavigateTo("ScheduleCourseList","5 КУРС")}}
                />
            </View>
            </HOCSwipeBack>
        );
    }
}
