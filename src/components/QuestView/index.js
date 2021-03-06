import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import SmallButton from '../SmallAttentionButton';
import {parseColorText} from "../../libs/methods";
import Button from '../AttentionButton';
import styles from './Style';

export default function(props){
    const description = "Коротке описання квесту, що абітурієнт дізнається, коли прийде на нього та інші деталі"

    const onPressEdit = () => {
        props.navigation.navigate("EnrolleeQuestEdit",{editMode:true,data:props.data});
    };

    let date = props.data.date;
    if(typeof date === "string") date = new Date(date);
    let month = date.getMonth()+1;
    if(month < 10) month="0"+month;
    const textDate = date.getDate()+"."+month+"."+date.getFullYear();

    let time = date.getHours()+":"+date.getMinutes();

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
                <Text style={styles.date}>{textDate}</Text>
                <Text style={styles.h1}>{props.data.title}</Text>
                <View style={styles.info}>
                    <Text style={styles.h2}>Час початку: {time}</Text>
                    <Text style={styles.p}>{parseColorText(props.data.brief)}</Text>
                    <Button title={"ХОЧУ ПІТИ"} onPress={props.onPressNavigate}/>
                </View>
            </View>
        </View>
    );
}
