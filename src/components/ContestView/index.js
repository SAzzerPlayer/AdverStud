import React from 'react';
import {View,Text} from 'react-native';
import Button from '../AttentionButton';
import styles from './Style';

export default function(props){
    return(
        <View style={styles.view}>
            <Text style={styles.h1}>Поїздка в Хогвартс</Text>
            <View style={styles.info}>
                <Text style={styles.h2}>Знайти таємну кімнату</Text>
                <Text style={styles.date}>10.02.2020</Text>
                <Text style={styles.p}>{"- 1-ша умова\n- 2-га умова"}</Text>
                <Button title={"ДІЗНАТИСЯ БІЛЬШЕ"} onPress={props.onPress}/>
            </View>
        </View>
    );
}
