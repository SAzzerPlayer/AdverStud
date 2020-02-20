import React from 'react';
import {TextInput,Image,View,TouchableOpacity} from 'react-native';
import styles from './Style';

export default function (props) {
    return(
        <View style={styles.view}>
            <TextInput
                style={[styles.input,styles.text]}
                value = {props.value}
                onChangeText = {props.onChangeText}
                placeholder={"Знайти..."}
            />
            <TouchableOpacity onPress={props.onPressSearch} style={styles.search}>
                <Image style={styles.icon} source={require("../../assets/images/iconSearch.png")}/>
            </TouchableOpacity>
        </View>
    );
}
