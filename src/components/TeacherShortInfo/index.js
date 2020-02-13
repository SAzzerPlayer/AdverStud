import React from 'react';
import {View,Image,Text,TouchableOpacity} from 'react-native';
import styles from './Style';
import Button from '../../components/SmallAttentionButton';
export default function(props){
    const onPressEdit = () => {
        props.navigation.navigate("TeacherEdit",{editMode:true,data:props.data});
    };
    return(
        <View>
            {true && <View style={styles.buttons}>
                <TouchableOpacity onPress={onPressEdit}>
                    <Image source={require("../../assets/images/pen.png")} style={styles.button}/>
                </TouchableOpacity>
            </View>}
            <View style={styles.row}>
                <Image style={styles.photo} source={props.data.image}/>
                <View style={styles.info}>
                    <Text style={styles.h1}>{props.data.surname}</Text>
                    <Text style={styles.h2}>{props.data.firstname+" "+props.data.middlename}</Text>
                    <Button title={"Контакти".toUpperCase()} onPress={props.onPress}
                    />
                </View>
            </View>
        </View>
    );
}
