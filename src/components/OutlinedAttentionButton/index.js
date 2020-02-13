import React from 'react';
import {TouchableOpacity,Text,View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles, {gradientColors} from './Style';

export default function (props){
    return(
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <View style={styles.gradient}>
                <View style={[styles.active,{opacity:0}]}/>
                <Text style={styles.text}>{props.title}</Text>
                <View style={[styles.active,{opacity:0}]}/>
            </View>
        </TouchableOpacity>
    );
}
