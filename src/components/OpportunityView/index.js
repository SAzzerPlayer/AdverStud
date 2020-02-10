import React from 'react';
import {View,Text,Linking} from 'react-native';
import Button from '../AttentionButton';
import styles from './Style';
export default function (props) {
    const conditionsJSX = props.items.map((currElem,index)=>{
        if(index !== props.items.length-1) {
            return <Text style={styles.p}>{currElem}</Text>;
        }
        else return <Text style={[styles.p,{marginBottom:16}]}>{currElem}</Text>
    });
    const onPressLink = () => {
        Linking.openURL("https://www.google.com");
    };
    return(
        <View style={styles.view}>
            <Text style={styles.h1}>{props.title}</Text>
            <Text style={styles.h2}>Умови</Text>
            {conditionsJSX}
            <Button title={"Дізнатися більше".toUpperCase()} onPress={onPressLink}/>
        </View>
    );
};
