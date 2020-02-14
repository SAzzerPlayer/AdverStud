import React from 'react';
import {View,Text,TouchableOpacity, Image} from 'react-native';
import Button from '../SmallAttentionButton';
import styles from './Style';

export default function(props){

    let date = props.data.date;
    let month = date.getMonth()+1;
    if(month < 10) month = "0"+month;
    date = date.getDate()+"."+month+"."+date.getFullYear();

    const onPressNavigate = () => {
        props.navigation.navigate("TaskDeadlineDescription",{data:props.data,course:props.course,group:props.group})
    };

    const onPressEdit = () => {
        props.navigation.navigate("TaskDeadlineEdit",{data:props.data,course:props.course,group:props.group});
    };

    return(
        <View>
            {props.adminMode && <View style={styles.buttons}>
                <TouchableOpacity style={styles.delete} onPress={props.onPressDelete}>
                    <Text style={styles.deleteText}>ВИДАЛИТИ</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onPressEdit}>
                    <Image style={styles.edit} source={require('../../assets/images/pen.png')}/>
                </TouchableOpacity>
            </View>}
            <View style={styles.view}>
                <View style={styles.description}>
                    <Text style={styles.p}>{props.index + ". "+props.data.title}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
                <Button title={"ЗАВДАННЯ"} onPress={onPressNavigate}/>
            </View>
        </View>
    );
}
