import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {parseColorText} from "../../libs/methods";
import styles from './Style';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

class EnrolleeQuestsDescriptionScreen extends React.Component{
    constructor(props){
        super(props);
        let data = this.props.navigation.getParam("data");

        let date = data.date;
        if(typeof date === "string") date = new Date(date);
        let month = date.getMonth();
        if(month<10) month = "0"+month;



        this.state = {
            date: date.getDate()+"."+month+"."+date.getFullYear(),
            time: date.getHours()+":"+date.getMinutes(),
            brief: data.brief,
            description: data.description,
            title: data.title,
            image: data.image
        }
    }
    render(){
        const description = "Описання квесту, чому можна на ньому навчитися.\nНа тебе чекають такі локації\n\n" +
            "ЛОКАЦІЇ:\n- Назва локації\n- Назва локації";
        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                    <Text style={styles.date}>{this.state.date}</Text>
                    <Text style={styles.h1}>{this.state.title}</Text>
                    <Image style={styles.image} source={this.state.image}/>
                    <Text style={styles.p}>{parseColorText(this.state.description)}</Text>
                    <Text style={styles.h2}>Час початку: {this.state.time}</Text>
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}

export default EnrolleeQuestsDescriptionScreen;
