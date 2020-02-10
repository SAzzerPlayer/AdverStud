import React from 'react';
import {View,Text,Image,Linking,ScrollView} from 'react-native';
import Button from '../../components/AttentionButton';
import styles from './Style';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

export default class extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const description = "Конспект за маркетингом та PR + прочитати Ж.Багбадера '99 франків' та" +
            "подивитися фільм '99 франків'. Зробити аналіз.";

        const onPressLink = () => {
            Linking.openURL("https://www.google.com");
        };

        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView>
                    <Text style={[styles.h1,{marginTop:90}]}>ЗАВДАННЯ</Text>
                    <View style={styles.teacherInfo}>
                        <Image style={styles.image}/>
                        <View style={styles.info}>
                            <Text style={styles.h2}>Викладач:</Text>
                            <Text style={styles.h2}>Ємельяненко Тетяна Георгіївна</Text>
                        </View>
                    </View>
                    <Text style={styles.p}>{description}</Text>
                    <Text style={styles.date}>ДО 19.12.19 !</Text>
                    <Text style={styles.h1}>ЗАКРІПЛЕНІ ФАЙЛИ</Text>
                    <Button title={"Перейти за посиланням"} onPress={onPressLink}/>
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}
