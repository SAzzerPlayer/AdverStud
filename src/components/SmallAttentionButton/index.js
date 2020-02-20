import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles, {gradientColors,gradientOffColors} from './Style';

export default function (props){
    return(
        <TouchableOpacity disabled={props.disabled} style={[styles.button,props.style]} onPress={props.onPress}>
            {!props.disabled && <LinearGradient locations={[0,1]} style={styles.gradient} colors={gradientColors}>
                <Text style={styles.text}>{props.title}</Text>
            </LinearGradient>}
            {props.disabled && <LinearGradient locations={[0,1]} style={styles.gradient} colors={gradientOffColors}>
                <Text style={styles.text}>{props.title}</Text>
            </LinearGradient>}
        </TouchableOpacity>
    );
}
