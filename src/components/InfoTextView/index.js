import React from 'react';
import {View,Text} from 'react-native';
import styles from './Style';

export default function(props){

    const description = "Для того, щоб поступити до нас на бюджет ти маєш:\n\n" +
        "Скласти іспити не менш ніж на 190 балів. Обов'язковими іспитами є:\n\n" +
        "1. УКРАЇНСЬКА МОВА\n2. АНГЛІЙСЬКА МОВА АБО МАТЕМАТИКА";

    const title = "ПІДГОТОВКА ДО ЗНО";
    return(
        <View style={styles.view}>
            <Text style={styles.h1}>{title}</Text>
            <Text style={styles.p}>{description}</Text>
        </View>
    );
}
