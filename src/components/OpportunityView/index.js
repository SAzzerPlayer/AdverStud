import React from 'react';
import {Alert,View,Text,Linking,TouchableOpacity,Image} from 'react-native';
import Button from '../AttentionButton';
import styles from './Style';
export default function (props) {

    const onPressLink = () => {
        Linking.openURL(props.data.link);
    };

    const onPressDelete = () => {
        Alert.alert("Підтвердження","Ви впевнені, що хочете видалити запис?",
            [
                {text:"Ні",onPress:()=>{}},
                {text:"Так",onPress:props.onPressDelete}
            ])
    };

    const onPressEdit = () => {
        props.navigation.navigate("OpportunityEdit",{editMode:true,data:props.data});
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
                <Text style={styles.h1}>{props.data.name}</Text>
                {props.isOpportunity && <Text style={styles.h2}>Умови</Text>}
                {props.isWork && <Text style={styles.h2}>Вимоги</Text>}
                <Text style={styles.p}>{props.data.description}</Text>
                <Button title={"Дізнатися більше".toUpperCase()} onPress={onPressLink}/>
            </View>
        </View>
    );
};
