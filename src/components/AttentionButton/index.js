import React from 'react';
import {TouchableOpacity,Text,View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles, {gradientColors} from './Style';

export default function (props){
    let opacityDot = 0;
    if(props.active){
        opacityDot = 0.75;
    }
    return(
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <LinearGradient locations={[0,1]} style={styles.gradient} colors={gradientColors}>
                <View style={[styles.active,{opacity:0}]}/>
                <Text style={styles.text}>{props.title}</Text>
                <View style={[styles.active,{opacity:opacityDot}]}/>
            </LinearGradient>
        </TouchableOpacity>
    );
}
