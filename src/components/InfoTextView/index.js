import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import {parseColorText} from "../../libs/methods";
import styles from './Style';

export default function(props){

    const onPressEdit = () => {
        props.navigation.navigate("EnrolleePreparingEdit",{editMode:true,data:props.data});
    };

    return(
        <View>
            {props.adminMode && <View style={styles.buttons}>
                <TouchableOpacity style={styles.delete} onPress={props.onPressDelete}>
                    <Text style={styles.deleteText}>ВИДАЛИТИ</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressEdit}>
                    <Image style={styles.edit} source={require("../../assets/images/pen.png")}/>
                </TouchableOpacity>
            </View>}
            <View style={styles.view}>
                <Text style={styles.h1}>{props.data.title}</Text>
                <Text style={styles.p}>{parseColorText(props.data.description)}</Text>
            </View>
        </View>
    );
}
