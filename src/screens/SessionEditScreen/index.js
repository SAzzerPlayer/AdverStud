import React from 'react';
import {Alert,View, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import TextColorButtons from '../../components/TextColorButtons';
import {Picker} from '@react-native-community/picker';
import HOCBackSwipe from '../../hoc/GestureRightSwipe';
import Button from '../../components/AttentionButton';
import {generateKey} from '../../libs/methods';
import {connect} from 'react-redux';
import styles from './Style';
import DatePicker from '@react-native-community/datetimepicker';

class SessionEditScreen extends React.Component{
    constructor(props){
        super(props);
        let teachers = this.props.teachers;
        if(teachers.length === 0) teachers.push({id:"0"});
        this.state = {
            id : generateKey(64),
            teacher:this.props.teachers[0].id||"0",
            title:"",
            date: new Date(),
            datePickerIsVisible:false,
            timePickerIsVisible:false
        }
    }

    componentDidMount(){
        if(this.props.navigation.getParam("editMode")){
            this.setState({...this.props.navigation.getParam("data")});
        }
    }

    render(){

        const onPressDatePicker = () => {
            this.setState({datePickerIsVisible:true});
        };

        const onPressTimePicker = () => {
            this.setState({timePickerIsVisible:true})
        };

        const onChangeDate = (event,date)=>{
            this.setState({date:date||new Date(),datePickerIsVisible:false});
        };

        const onChangeTime = (event,date)=>{
            let setDate = this.state.date;
            date = date || new Date();
            setDate.setHours(date.getHours());
            setDate.setMinutes(date.getMinutes());
            this.setState({date:setDate,timePickerIsVisible:false});
        };

        const onPressPublish = () => {

            const validTitle = this.state.title.length > 0;

            if(validTitle){
                let editMode = this.props.navigation.getParam("editMode");
                let course = this.props.navigation.getParam("course");
                const obj = {
                    id:this.state.id,
                    teacher:this.state.teacher,
                    title:this.state.title,
                    date:this.state.date
                };

                if(editMode){
                    this.props.changeSession(obj,course);
                }
                else{
                    this.props.addSession(obj,course);
                }
                this.props.navigation.popToTop();
                setTimeout(()=>{this.props.navigation.navigate("Menu")},100);
            }
            else Alert.alert("Помилка","Було введено невірні дані!");

        };

        return(
            <HOCBackSwipe onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.h1}>CЕСІЯ</Text>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>ДИСЦИПЛІНА</Text>
                        <TextColorButtons onChange={(text)=>{this.setState({title:text})}} text={this.state.title}/>
                        <TextInput style={styles.input}
                                   editable
                                   maxLength={128}
                                   onChangeText={(text)=>{this.setState({title:text})}}
                                   value={this.state.title}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>ВИКЛАДАЧ</Text>
                        <Picker style={styles.picker}
                                selectedValue={this.state.teacher}
                                onValueChange={(itemValue,itemIndex)=>{this.setState({teacher:itemValue})}}
                        >
                            {this.props.teachers.map((currElem)=>{
                                let teacherLabel = "";
                                if(currElem.id === '0'){
                                    teacherLabel = "Порожньо";
                                }
                                else teacherLabel = currElem.surname+" "+currElem.firstname+" "+currElem.middlename;
                                return (
                                    <Picker.Item label={teacherLabel} value={currElem.id}/>
                                )
                            })}
                        </Picker>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>ДАТА ДЕДЛАЙНУ</Text>
                        {this.state.datePickerIsVisible && <DatePicker
                            value={this.state.date}
                            onChange={onChangeDate}
                            display={"default"}
                            mode={"date"}
                            is24Hour
                        />}
                        <TouchableOpacity style={styles.datePicker}
                                          onPress={onPressDatePicker}
                        >
                            <Text style={[styles.h2,{textAlign:'center'}]}>{this.state.date.getDate()+"-"
                            +(this.state.date.getMonth()+1)+"-"
                            +this.state.date.getFullYear()}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>ЧАС ДЕДЛАЙНУ</Text>
                        {this.state.timePickerIsVisible && <DatePicker
                            value={this.state.date}
                            onChange={onChangeTime}
                            display={"clock"}
                            mode={"time"}
                            is24Hour
                        />}
                        <TouchableOpacity style={styles.datePicker}
                                          onPress={onPressTimePicker}
                        >
                            <Text style={[styles.h2,{textAlign:'center'}]}>{this.state.date.getHours()+":"
                            +this.state.date.getMinutes()}</Text>
                        </TouchableOpacity>
                    </View>
                    <Button title={"ОПУБЛІКУВАТИ"} onPress={onPressPublish}/>
                    <View style={styles.empty}/>
                </ScrollView>
            </View>
            </HOCBackSwipe>
        );
    }
}

function mapStateToProps(state){
    return {
        teachers:state.teacher.arr
    }
}

function mapDispatchToProps(dispatch){
    return {
        addSession:(obj,course)=>dispatch({type:"ADD_SESSION",value:obj,course}),
        changeSession:(obj,course)=>dispatch({type:"CHANGE_SESSION",value:obj,course})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SessionEditScreen);

