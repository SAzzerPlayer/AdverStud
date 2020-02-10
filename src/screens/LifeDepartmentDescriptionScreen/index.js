import React from 'react';
import {View,Text,ScrollView,Image} from 'react-native';
import styles from './Style';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

export default class extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        const title = "Угроза остаться голодными на многие года!".toUpperCase();

        const catchText = "Развед.отряд Молодчики напуганы! " +
            "Голубь Валера и его банда угрожает хлебушку отчаянных студентов из общежития №1. ";

        const descriptionText = "Из-за резкого потепления в местности стали обитать агрессивные особи заграничных кровей." +
            "Глава развед.отряда Вася обнаружил редких голубей-негров. Есть подозрения на то, что их обучили шпионы Запада. " +
            "Бедные студенты 1-го общежития терпат потери хлебушка с каждой секунды, царит ужас и хаос.\n" +
            "Чтобы избежать зимнего коллапса с голодовкой и переполнением столовок, участвуйте в гранте с поим." +
            "Бабуля поймет, бабуля простит.\n" +
            "P/S Главарь Бабка Маня";

        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={[styles.h2,{textAlign:'right',marginTop:90}]}>Дата: 05.02.2020</Text>
                    <Text style={[styles.h1,{textAlign:'center'}]}>{title}</Text>
                    <Image style={styles.image} source={require('../../assets/images/пижон.webp')}/>
                    <Text style={[styles.h2,{textAlign:'left'}]}>{catchText}</Text>
                    <Text style={[styles.p,{textAlign:'left'}]}>{descriptionText}</Text>
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}
