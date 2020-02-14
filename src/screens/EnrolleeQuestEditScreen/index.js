import React from 'react';
import {Alert, View, Text, TextInput, ScrollView, TouchableOpacity, Image} from 'react-native';
import {Picker} from '@react-native-community/picker';
import HOCBackSwipe from '../../hoc/GestureRightSwipe';
import Button from '../../components/AttentionButton';
import {generateKey} from '../../libs/methods';
import {connect} from 'react-redux';
import styles from './Style';
import DatePicker from '@react-native-community/datetimepicker';

class EnrolleeQuestEditScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id : generateKey(64),
            title:"",
            date: new Date(),
            datePickerIsVisible:false,
            timePickerIsVisible:false,
            brief:"",
            description:"",
            image:require("../../assets/images/pen.png")
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
                const obj = {
                    id:this.state.id,
                    title:this.state.title,
                    date:this.state.date,
                    brief:this.state.brief,
                    description:this.state.description,
                    image:this.state.image
                };

                if(editMode){
                    this.props.changeQuest(obj);
                }
                else{
                    this.props.addQuest(obj);
                }
                this.props.navigation.popToTop();
                setTimeout(()=>{this.props.navigation.navigate("Menu")},100);
            }
            else Alert.alert("Помилка","Було введено невірні дані!");

        };

        const onPressImagePicker = () => {

        };

        return(
            <HOCBackSwipe onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.h1}>CЕСІЯ</Text>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>НАЗВА</Text>
                        <TextInput style={styles.input}
                                   editable
                                   maxLength={80}
                                   onChangeText={(text)=>{this.setState({title:text})}}
                                   value={this.state.title}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <Text style={styles.h2}>БРІФ</Text>
                        <TextInput style={styles.multiInput}
                                   editable
                                   maxLength={128}
                                   multiline
                                   numberOfLines={8}
                                   onChangeText = {(text)=>{this.setState({brief:text})}}
                                   value={this.state.brief}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <Text style={styles.h2}>ОПИС</Text>
                        <TextInput style={styles.multiInput}
                                   editable
                                   maxLength={512}
                                   multiline
                                   numberOfLines={8}
                                   onChangeText = {(text)=>{this.setState({description:text})}}
                                   value={this.state.description}
                        />
                    </View>

                    <View style={styles.pickerView}>
                        <TouchableOpacity onPress={onPressImagePicker}>
                            <Image style={styles.photo} source={require('../../assets/images/photo.png')}/>
                        </TouchableOpacity>
                        <Image style={styles.photo} source={this.state.image}/>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>ДАТА ПРОВЕДЕННЯ</Text>
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
                        <Text style={styles.h2}>ЧАС ПРОВЕДЕННЯ</Text>
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
        addQuest:(obj)=>dispatch({type:"ADD_QUEST",value:obj}),
        changeQuest:(obj)=>dispatch({type:"CHANGE_QUEST",value:obj})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EnrolleeQuestEditScreen);

