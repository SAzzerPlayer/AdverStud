import React from 'react';
import {View,Text,Image,Linking,ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {parseColorText} from "../../libs/methods";
import Button from '../../components/AttentionButton';
import styles from './Style';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

class TasksDeadlineDescriptionScreen extends React.Component{
    constructor(props){
        super(props);
        let data = this.props.navigation.getParam("data");
        let teacher = this.props.teachers.find((currElem)=>{
            if(currElem.id===data.teacher) return true;
            else return false;
        });
        if(!teacher){
            teacher = {};
            teacher.surname = "";
            teacher.firstname= "Не обрано";
            teacher.middlename = "";
        }
        let date = data.date;
        let month = date.getMonth()+1;
        if(month < 10) month = "0"+month;

        let defaultImage = require("../../assets/images/noname.png");

        this.state = {
            title: data.title,
            image: teacher.image||defaultImage,
            teacherName: teacher.surname+" "+teacher.firstname+" "+teacher.middlename,
            date: date.getDate()+"."+month+"."+date.getFullYear(),
            description:data.description,
            link: data.link
        }
    }
    render(){
        const onPressLink = () => {
            let regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
            console.log(this.state.link);
            console.log(regex.test(this.state.link));
            if(regex.test(this.state.link)) {
                Linking.openURL(this.state.link);
            }
            else this.props.navigation.navigate("NotFound");
        };

        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={[styles.h1,{marginTop:90}]}>ЗАВДАННЯ</Text>
                    <View style={styles.teacherInfo}>
                        <Image style={styles.image} source={this.state.image}/>
                        <View style={styles.info}>
                            <Text style={styles.h2}>Викладач:</Text>
                            <Text style={styles.h2}>{this.state.teacherName}</Text>
                        </View>
                    </View>
                    <Text style={styles.p}>{parseColorText(this.state.description)}</Text>
                    <Text style={styles.date}>ДО {this.state.date} !</Text>
                    <Text style={styles.h1}>ЗАКРІПЛЕНІ ФАЙЛИ</Text>
                    <Button title={"Перейти за посиланням"} onPress={onPressLink}/>
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}

function mapStateToProps(state){
    return {
        teachers:state.teacher.arr
    };
}

export default connect(mapStateToProps)(TasksDeadlineDescriptionScreen);
