import React from 'react';
import {View,Image,Text} from 'react-native';
import styles from './Style';
import Button from '../../components/SmallAttentionButton';
export default function(props){
    return(
        <View style={styles.row}>
            <Image style={styles.photo}/>
            <View style={styles.info}>
                <Text style={styles.h1}>Прізвище</Text>
                <Text style={styles.h2}>Ім'я по-батькові</Text>
                <Button title={"Контакти".toUpperCase()} onPress={props.onPress}
                />
            </View>
        </View>
    );
}
