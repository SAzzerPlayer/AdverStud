import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './Style';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

export default class extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const description = "Описання квесту, чому можна на ньому навчитися.\nНа тебе чекають такі локації\n\n" +
            "ЛОКАЦІЇ:\n- Назва локації\n- Назва локації";
        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView style={styles.scroll}>
                    <Text style={styles.date}>10.02.2020</Text>
                    <Text style={styles.h1}>Пошук пригод на свою задню точку</Text>
                    <Image style={styles.image}/>
                    <Text style={styles.p}>{description}</Text>
                    <Text style={styles.h2}>Час початку: 00:00</Text>
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}
