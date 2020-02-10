import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles, {gradientColors} from './Style';

export default function (props){
    return(
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <LinearGradient locations={[0,1]} style={styles.gradient} colors={gradientColors}>
                <Text style={styles.text}>{props.title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}
