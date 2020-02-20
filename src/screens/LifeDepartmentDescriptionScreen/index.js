import React from 'react';
import {View,Text,ScrollView,Image} from 'react-native';
import {parseColorText} from "../../libs/methods";
import styles from './Style';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

export default class extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        const data = this.props.navigation.getParam("data");

        let date = data.date;
        if(typeof date === "string") date = new Date(date);
        let month = data.date.getMonth()+1;
        if(month < 10){
            month = "0"+month;
        }
        date = data.date.getDate()+"."+month+"."+data.date.getFullYear();

        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={[styles.h2,{textAlign:'right',marginTop:90}]}>Дата: {date}</Text>
                    <Text style={[styles.h1,{textAlign:'center'}]}>{data.title}</Text>
                    <Image style={styles.image} source={data.image}/>
                    <Text style={[styles.h2,{textAlign:'left'}]}>{parseColorText(data.lida)}</Text>
                    <Text style={[styles.p,{textAlign:'left'}]}>{parseColorText(data.description)}</Text>
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}
