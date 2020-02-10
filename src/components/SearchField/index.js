import React from 'react';
import {TextInput,Image,View} from 'react-native';
import styles from './Style';

export default function (props) {
    return(
        <View style={styles.view}>
            <TextInput style={[styles.input,styles.text]}/>
            <Image style={styles.icon} source={require("../../assets/images/iconSearch.png")}/>
        </View>
    );
}
