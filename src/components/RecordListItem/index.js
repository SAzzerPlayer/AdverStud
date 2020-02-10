import React from 'react';
import {View,Text,Linking} from 'react-native';
import Button from '../AttentionButton';
import SmallButton from '../SmallAttentionButton';
import styles from './Style';

export default function(props){

    const onPressLink = () => {
        Linking.openURL("https://www.google.com");
    };

    return(
        <View>
            <Text style={styles.p}>{props.text}</Text>
            <SmallButton
                title={"Викладач"}
                onPress={props.onPress}
            />
        </View>
    );
}
