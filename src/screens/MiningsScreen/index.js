import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image, Alert} from 'react-native';
import {connect} from 'react-redux';
import ListItem from '../../components/RecordListItem';
import styles from './Style';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

const dictMonths = {
    0:"СІЧЕНЬ",
    1:"ЛЮТИЙ",
    2:"БЕРЕЗЕНЬ",
    3:"КВІТЕНЬ",
    4:"ТРАВЕНЬ",
    5:"ЧЕРВЕНЬ",
    6:"ЛИПЕНЬ",
    7:"СЕРПЕНЬ",
    8:"ВЕРЕСЕНЬ",
    9:"ЖОВТЕНЬ",
    10:"ЛИСТОПАД",
    11:"ГРУДЕНЬ"
};

function sortByDate(elem1,elem2){
    if(elem1.date > elem2.date) return 1;
    else if(elem1.date < elem2.date) return -1;
    else return 0;
}

class MiningsScreen extends React.Component{
    constructor(props){
        super(props);
        let course = this.props.navigation.getParam("course");
        let minings = this.props["course"+course];
        minings = minings.sort(sortByDate);
        let miningsMonth = [];
        for(let i=0;i<12;i++) miningsMonth.push([]);//every number of counter is a number of month
        for(let mining of minings){
            miningsMonth[mining.date.getMonth()].push(mining);
        }
        this.state = {
            minings : minings,
            miningsMonth : miningsMonth,
            course
        }
    }
    componentDidMount(){
        if(this.state.minings.length === 0 && !this.props.adminMode){
            this.props.navigation.pop();
            this.props.navigation.navigate("NotFound");
        }
    }
    render(){

        const onPressAdd = () => {
            this.props.navigation.navigate("MiningEdit",{editMode:false,course:this.state.course});
        };

        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.header}>
                        <View style={styles.empty}/>
                        <Text style={[styles.h1]}>ВІДПРАЦЮВАННЯ</Text>
                        {this.props.adminMode && <TouchableOpacity style={styles.add} onPress={onPressAdd}>
                            <Text style={styles.addText}>ДОДАТИ</Text>
                        </TouchableOpacity>}
                        {!this.props.adminMode && <View style={styles.empty}/>}
                    </View>
                    {this.state.miningsMonth.map((currElem,index)=>{
                        if(currElem.length>0) {
                            return (
                                <View>
                                    {index === new Date().getMonth() &&
                                    <Text style={[styles.h2, styles.active]}>{dictMonths[index]}</Text>
                                    }
                                    {index !== new Date().getMonth() &&
                                    <Text style={[styles.h2]}>{dictMonths[index]}</Text>
                                    }
                                    {currElem.map((mining)=>{
                                        let teacher = this.props.teachers.find((element)=>{
                                            if(element.id === mining.teacher) return true;
                                            else return false;
                                        });
                                        const onPressEdit = () => {
                                            this.props.navigation.navigate("MiningEdit",{editMode:true,data:mining,course:this.state.course})
                                        };

                                        const onPressDelete = () => {
                                            Alert.alert("Підтвердження","Ви впевнені, що хочете видалити запис?",
                                                [
                                                    {text:"Ні",onPress:()=>{}},
                                                    {text:"Так",onPress:()=>{
                                                            this.props.deleteMining(mining,this.state.course);
                                                            this.props.navigation.pop();
                                                        }}
                                                ])
                                        };

                                        const onPressTeacher = () => {
                                            this.props.navigation.navigate("TeacherInfo",
                                                {
                                                    data:teacher
                                                });
                                        };

                                        if(typeof mining.date === "string") mining.date = new Date(mining.date);
                                        let month = mining.date.getMonth()+1;
                                        if(month < 10) month = "0"+month;
                                        const date = mining.date.getDate()+"."+month+"."+mining.date.getFullYear();
                                        const time = mining.date.getHours()+":"+mining.date.getMinutes();
                                        const text = date+" - "+mining.title+" - "+time;

                                        return (
                                            <ListItem
                                                data = {mining}
                                                navigation={this.props.navigation}
                                                text={text}
                                                course={this.state.course}
                                                onPress={onPressTeacher}
                                                onPressDelete={onPressDelete}
                                                onPressEdit={onPressEdit}
                                                adminMode={this.props.adminMode}
                                                teacher = {teacher}
                                            />
                                        )
                                    })}
                                </View>
                            )
                        }
                    })}
                    {this.state.minings.length === 0 && <Text style={styles.h2}>Нажаль, дані відсутні</Text>}
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}

function mapStateToProps(state){
    return {
        course1:state.schedule.course1.minings,
        course2:state.schedule.course2.minings,
        course3:state.schedule.course3.minings,
        course4:state.schedule.course4.minings,
        course5:state.schedule.course5.minings,
        teachers:state.teacher.arr,
        adminMode:state.global.adminMode
    }
}

function mapDispatchToProps(dispatch){
    return {
        deleteMining:(obj,course)=>dispatch({type:"DELETE_MINING",value:obj,course})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MiningsScreen);
