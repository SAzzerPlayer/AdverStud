import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {parseColorText} from "../../libs/methods";
import styles from './Style';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

class EnrolleeContestsDescriptionScreen extends React.Component{
    constructor(props){
        super(props);
        let data = this.props.navigation.getParam("data");

        let date = data.date;
        if(typeof date === "string") date = new Date(date);
        let month = date.getMonth()+1;
        if(month < 10) month="0"+month;

        this.state = {
            ...data,
            date: date.getDate()+"."+month+"."+date.getFullYear()
        }
    }
    render(){


        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.h1}>{this.state.title}</Text>
                    <Image style={styles.image} source={this.state.image}/>
                    <Text style={styles.h2}>{parseColorText(this.state.brief)}</Text>
                    <Text style={styles.p}>{parseColorText(this.state.description)}</Text>
                    <Text style={styles.date}>{this.state.date}</Text>
                    <Text style={styles.email}>{this.state.email}</Text>
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}

export default EnrolleeContestsDescriptionScreen;
