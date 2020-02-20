import React from 'react';
import {View,Text,Linking,TouchableOpacity,Image} from 'react-native';
import Button from '../AttentionButton';
import SmallButton from '../SmallAttentionButton';
import styles from './Style';
import {parseColorText} from '../../libs/methods';
export default function(props){


    return(
        <View>
            {props.adminMode && <View style={styles.buttons}>
                <TouchableOpacity style={styles.delete} onPress={props.onPressDelete}>
                    <Text style={styles.deleteText}>ВИДАЛИТИ</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onPressEdit}>
                    <Image style={styles.edit} source={require("../../assets/images/pen.png")}/>
                </TouchableOpacity>
            </View>}
            <Text style={styles.p}>{parseColorText(props.text)}</Text>
            <SmallButton
                title={"Викладач"}
                disabled={!props.teacher}
                onPress={props.onPress}
            />
        </View>
    );
}
