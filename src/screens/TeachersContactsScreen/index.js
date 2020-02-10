import React from 'react';
import {View,Text,Image} from 'react-native';
import HOCSwipeBack from '../../hoc/GestureRightSwipe';
import styles from './Style';

export default class extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
                <View style={styles.screen}>
                    <Text style={styles.h1}>Прізвище</Text>
                    <Text style={styles.h2}>Ім'я По-батькові</Text>
                    <Image style={styles.photo}/>
                    <Text style={[styles.h2,styles.numberText]}>Viber: +(380)99-999-99</Text>
                    <Text style={[styles.h2,styles.numberText]}>Telegram: +(380)99-999-99</Text>
                    <Text style={[styles.h2,styles.numberText]}>myemail@gmail.com</Text>
                </View>
            </HOCSwipeBack>
        );
    }
}
