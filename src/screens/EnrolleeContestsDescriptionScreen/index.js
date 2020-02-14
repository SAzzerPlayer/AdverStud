import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './Style';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

class EnrolleeContestsDescriptionScreen extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const name = "НАЗВА КОНКУРСУ";

        const sense = "Тут має бути під жирним шрифтом, що розкриває суть конкурсу і має бути смайлик в кінці";

        const description = "- 1 умова виконання роботи\n- 2 умова виконання роботи\n- 3 умова виконання роботи\n";

        const date = "10.02.2020";

        const email = "Роботу відправляти за адресою: myemailaddress@gmail.com";

        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView>
                    <Text style={styles.h1}>{name}</Text>
                    <Image style={styles.image}/>
                    <Text style={styles.h2}>{sense}</Text>
                    <Text style={styles.p}>{description}</Text>
                    <Text style={styles.date}>{date}</Text>
                    <Text style={styles.email}>{email}</Text>
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}

export default EnrolleeContestsDescriptionScreen;
