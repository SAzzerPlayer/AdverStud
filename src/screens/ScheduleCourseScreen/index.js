import React from 'react';
import {Alert,View, Text, TextInput, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import styles from './Style';
import Button from '../../components/AttentionButton';
import OutlinedButton from "../../components/OutlinedAttentionButton";

import HOCSwipeBack from '../../hoc/GestureRightSwipe';
import {Picker} from '@react-native-community/picker';

class ScheduleCourseScreen extends React.Component{
    constructor(props){
        super(props);
        const course = this.props.navigation.getParam("course");
        this.state = {
            groups: Object.keys(this.props["course"+course].groups)||[],
            newGroup: "",
            pickerValue: Object.keys(this.props["course"+course].groups)[0] || "Оберіть",
            course:course,
            isNumerator:true
        };
    }
    componentDidMount(){
        let setDate = this.props.studyBeginAt;
        let currentDate = new Date();
        let daysLag = Math.ceil(Math.abs(currentDate.getTime() - setDate.getTime()) / (1000 * 3600 * 24));
        daysLag = Math.floor(daysLag/7);
        if(daysLag%2===0) this.setState({isNumerator:true});
        else this.setState({isNumerator:false});
    }
    render(){

        const course = this.props.navigation.getParam("course")+" КУРС";

        const onPressNumerator = () => {
            if(this.state.groups.length > 0){
                this.props.navigation.navigate("WeekScheduleList",{
                    week:"ЧИСЛІВНИК",
                    course:this.state.course
                });
            }
            else this.props.navigation.navigate("NotFound");
        };

        const onPressDenominator = () => {
            if(this.state.groups.length > 0) {
                this.props.navigation.navigate("WeekScheduleList", {
                    week: "ЗНАМЕННИК",
                    course: this.state.course
                });
            }
            else this.props.navigation.navigate("NotFound");
        };

        const onPressMinings = () => {
            this.props.navigation.navigate("MiningList",{
                course:this.state.course
            });
        };

        const onPressSessions = () => {
            this.props.navigation.navigate("SessionList",{
                course:this.state.course
            });
        };

        const onPressAddGroup = () => {
            if(this.state.newGroup.length > 0){
                if(this.state.groups.includes(this.state.newGroup)){
                    Alert.alert("Помилка","Така група вже існує");
                }
                else{
                    this.props.addGroup(this.state.newGroup,this.state.course);
                    let groups = this.state.groups;
                    groups.push(this.state.newGroup);
                    this.setState({groups,pickerValue:groups[0]});
                }
            }
            else Alert.alert("Помилка","Не вказана назва групи");
        };

        const onPressDeleteGroup = () => {
            if(this.state.groups.length > 0){
                Alert.alert("Підтвердження","Ви впевнені, що хочете видалити цю групу?",
                    [
                        {text:"Ні",onPress:()=>{}},
                        {text:"Так",onPress:()=>{
                                this.props.deleteGroup(this.state.pickerValue,this.state.course);
                                let groups = this.state.groups;
                                groups.splice(groups.indexOf(this.state.pickerValue),1);
                                this.setState({groups,pickerValue:groups[0]||"Оберіть"})
                            }}
                    ]
                    )
            }
            else Alert.alert("Помилка","Ви не обрали групу для видалення або їх не існує")
        };

        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.h1}>{course}</Text>
                <Button title={"Числівник".toUpperCase()} active={this.state.isNumerator} onPress={onPressNumerator}/>
                <Button title={"Знаменник".toUpperCase()} active={!this.state.isNumerator} onPress={onPressDenominator}/>
                <Button title={"Відпрацювання".toUpperCase()} onPress={onPressMinings}/>
                <Button title={"Сесія".toUpperCase()} onPress={onPressSessions}/>
                    {this.props.adminMode &&
                <View>
                    <OutlinedButton title={"ДОДАТИ ГРУПУ"} onPress={onPressAddGroup}/>
                    <TextInput
                        style={styles.input}
                        value={this.state.newGroup}
                        onChangeText={(text)=>{this.setState({newGroup:text})}}
                        placeholder={"Назва групи"}
                    />
                    <View style={styles.groups}>
                        <Text style={[styles.h2,{marginBottom:0}]}>Лист груп курсу: </Text>
                        {this.state.groups.length === 0 && <Text style={[styles.h2,{marginBottom:0}]}>Порожньо</Text>}
                        {this.state.groups.length > 0 &&
                        <Picker
                            style={styles.picker}
                            selectedValue={this.state.pickerValue}
                            onValueChange={(itemValue,itemIndex)=>{
                                this.setState({pickerValue:itemValue});
                            }}
                            mode={'dialog'}
                        >
                            {this.state.groups.map((currElem)=>{
                                return <Picker.Item label={currElem} value={currElem}/>
                            })}
                        </Picker>
                        }
                    </View>
                    <OutlinedButton title={"ВИДАЛИТИ ГРУПУ"} onPress={onPressDeleteGroup}/>
                    <View style={styles.empty}/>
                </View>}
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}

function mapStateToProps(state){
    return {
        course1:state.schedule.course1,
        course2:state.schedule.course2,
        course3:state.schedule.course3,
        course4:state.schedule.course4,
        course5:state.schedule.course5,
        studyBeginAt:state.global.studyBeginAt,
        adminMode:state.global.adminMode
    };
}

function mapDispatchToProps(dispatch){
    return {
        addGroup:(group,course)=>dispatch({type:"ADD_SCHEDULE_COURSE_GROUP",course,value:group}),
        deleteGroup:(group,course)=>dispatch({type:"DELETE_SCHEDULE_COURSE_GROUP",course,value:group})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ScheduleCourseScreen);
