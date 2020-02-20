import React from 'react';
import {Alert,View, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-community/picker';
import TextColorButtons from '../../components/TextColorButtons';
import HOCBackSwipe from '../../hoc/GestureRightSwipe';
import Button from '../../components/AttentionButton';
import {generateKey} from '../../libs/methods';
import {connect} from 'react-redux';
import styles from './Style';
import DatePicker from '@react-native-community/datetimepicker';

class LifeDepartmentEditScreen extends React.Component{
    constructor(props){
        super(props);
        let teachers = this.props.teachers;
        if(teachers.length === 0)teachers.push({id:"0"});
        this.state = {
            id : generateKey(64),
            teacher:this.props.teachers[0].id||"0",
            title:"",
            date: new Date(),
            description:"",
            link:""
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

        const onChangeDate = (event,date)=>{
            this.setState({date:date||new Date(),datePickerIsVisible:false});
        };

        const onPressPublish = () => {

            const validTitle = this.state.title.length > 0;
            const validDescription = this.state.description.length > 0;
            const validURL = this.state.link.length > 0;

            if(validTitle && validURL && validDescription){
                let editMode = this.props.navigation.getParam("editMode");
                let group = this.props.navigation.getParam("group");
                let course = this.props.navigation.getParam("course");
                const obj = {
                    ...this.state
                };

                if(editMode){
                    this.props.changeHomework(obj,course,group);
                }
                else{
                    this.props.addHomework(obj,course,group);
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
                    <Text style={styles.h1}>ЗАВДАННЯ</Text>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>ДИСЦИПЛІНА</Text>
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
                                if(currElem.id === "0") teacherLabel = "Порожньо";
                                else teacherLabel = currElem.surname+" "+currElem.firstname+" "+currElem.middlename;
                                return (
                                    <Picker.Item label={teacherLabel} value={currElem.id}/>
                                )
                            })}
                        </Picker>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>ОПИС ЗАВДАННЯ</Text>
                        <TextColorButtons onChange={(text)=>{this.setState({description:text})}} text={this.state.description}/>
                        <TextInput style={styles.multiInput}
                                   editable
                                   maxLength={1024}
                                   multiline
                                   numberOfLines={8}
                                   onChangeText = {(text)=>{this.setState({description:text})}}
                                   value={this.state.description}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>URL-ПОСИЛАННЯ</Text>
                        <TextInput style={styles.input}
                                   editable
                                   onChangeText={(text)=>{this.setState({link:text})}}
                                   value={this.state.link}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.h1}>ДАТА ДЕДЛАЙНУ</Text>
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
        addHomework:(obj,course,group)=>dispatch({type:"ADD_HOMEWORK",value:obj,course,group}),
        changeHomework:(obj,course,group)=>dispatch({type:"CHANGE_HOMEWORK",value:obj,course,group})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LifeDepartmentEditScreen);

