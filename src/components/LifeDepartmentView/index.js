import React from 'react';
import {View,Image,Text,TouchableOpacity} from 'react-native';
import styles from './Style';

export default function(props){
    return(
        <View style={styles.view}>
            <Image style={styles.image} source={require('../../assets/images/пижон.webp')}/>
            <View>
                <Text style={styles.h2}>05.02.2020</Text>
                <Text style={styles.h1}>{"Угроза остаться голодными на многие года!".toUpperCase()}</Text>
                <TouchableOpacity onPress={props.onPress}>
                    <Text style={styles.h2}>ЧИТАТИ</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
