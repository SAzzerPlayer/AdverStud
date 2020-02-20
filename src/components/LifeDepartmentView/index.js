import React from 'react';
import {View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './Style';

export default function(props){
    let date = props.data.date;
    if(typeof date === "string") date = new Date(date);
    let month = date.getMonth()+1;
    if(month < 10){
        month = "0"+month;
    }
    date = date.getDate()+"."+month+"."+date.getFullYear();

    const onPressNavigate = () => {
        props.navigation.navigate("LifeDepartmentDescription",{editMode:false,data:props.data});
    };

    const onPressDelete = () => {
        Alert.alert("Підтвердження","Ви впевнені, що хочете видалити запис?",
            [
                {text:"Ні",onPress:()=>{}},
                {text:"Так",onPress:props.onPressDelete}
            ])
    };

    const onPressEdit = () => {
        props.navigation.navigate("LifeDepartmentEdit",{editMode:true,data:props.data});
    };

    return(
        <View>
            {props.adminMode && <View style={styles.buttons}>
                <TouchableOpacity style={styles.delete} onPress={onPressDelete}>
                    <Text style={styles.deleteText}>ВИДАЛИТИ</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressEdit}>
                    <Image style={styles.edit} source={require('../../assets/images/pen.png')}/>
                </TouchableOpacity>
            </View>}
            <View style={styles.view}>
                <Image style={styles.image} source={props.data.image}/>
                <View style={styles.description}>
                    <Text style={styles.h2}>{date}</Text>
                    <Text style={styles.h1}>{props.data.title.toUpperCase()}</Text>
                    <TouchableOpacity onPress={onPressNavigate}>
                        <Text style={styles.read}>ЧИТАТИ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
