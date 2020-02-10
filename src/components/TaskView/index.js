import React from 'react';
import {View,Text} from 'react-native';
import Button from '../SmallAttentionButton';
import styles from './Style';

export default function(props){
    return(
        <View style={styles.view}>
            <View style={styles.description}>
                <Text style={styles.p}>1. Реклама</Text>
                <Text style={styles.date}>10.06.2020</Text>
            </View>
            <Button title={"ЗАВДАННЯ"} onPress={props.onPress}/>
        </View>
    );
}
