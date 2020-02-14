import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import SmallButton from '../SmallAttentionButton';
import Button from '../AttentionButton';
import styles from './Style';

export default function(props){
    const description = "Коротке описання квесту, що абітурієнт дізнається, коли прийде на нього та інші деталі"

    const onPressNavigate = () => {

    };

    return(
        <View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.delete} onPress={props.onPressDelete}>
                    <Text style={styles.deleteText}>ВИДАЛИТИ</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onPressEdit}>
                    <Image style={styles.edit} source={require("../../assets/images/pen.png")}/>
                </TouchableOpacity>
            </View>
            <View style={styles.view}>
                <Text style={styles.date}>10.02.2020</Text>
                <Text style={styles.h1}>Пошук пригод на свою задню точку</Text>
                <View style={styles.info}>
                    <Text style={styles.h2}>Час початку: 00:00</Text>
                    <Text style={styles.p}>{description}</Text>
                    <Button title={"ХОЧУ ПІТИ"} onPress={props.onPress}/>
                </View>
            </View>
        </View>
    );
}
