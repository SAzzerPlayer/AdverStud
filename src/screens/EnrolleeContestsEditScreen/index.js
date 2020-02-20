import React from 'react';
import {Alert, View, Text, TextInput, ScrollView, TouchableOpacity, Image} from 'react-native';
import TextColorButtons from '../../components/TextColorButtons';
import HOCBackSwipe from '../../hoc/GestureRightSwipe';
import Button from '../../components/AttentionButton';
import {generateKey} from '../../libs/methods';
import {connect} from 'react-redux';
import styles from './Style';
import DatePicker from '@react-native-community/datetimepicker';
import ImagePicker from "react-native-image-crop-picker";
import RNFS from "react-native-fs";

class EnrolleeContestsEditScreen extends React.Component{
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
            email:"",
            image:require("../../assets/images/noname.png")
        }
    }

    componentDidMount(){
        if(this.props.navigation.getParam("editMode")){
            this.setState({...this.props.navigation.getParam("data")});
            if(typeof date === "string"){
                let date = this.state.date;
                date = new Date(date);
                this.setState({date});
            }
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
            const validDescription = this.state.description.length > 0;
            const validBrief = this.state.brief.length > 0;
            const validEmail = this.state.email.length > 0;

            if(validTitle && validDescription && validBrief && validEmail){
                let editMode = this.props.navigation.getParam("editMode");
                const obj = {
                    id:this.state.id,
                    title:this.state.title,
                    date:this.state.date,
                    brief:this.state.brief,
                    description:this.state.description,
                    image:this.state.image,
                    email:this.state.email
                };

                if(editMode){
                    this.props.changeContest(obj);
                }
                else{
                    this.props.addContest(obj);
                }
                this.props.navigation.popToTop();
                setTimeout(()=>{this.props.navigation.navigate("Menu")},100);
            }
            else Alert.alert("Помилка","Було введено невірні дані!");

        };

        const onPressImagePicker = () => {
            ImagePicker.openPicker({
                width: 400,
                height: 400,
                cropping: true
            })
                .then(async image => {
                    //Getting coded text of the image
                    let file = await RNFS.readFile(image.path , 'base64');
                    //Making it available for showing
                    let code = 'data:image/jpeg;base64,' + file;
                    //Saving state
                    this.setState({image:{uri:code}});
                })
                .catch(err=>{this.setState({image:require("../../assets/images/noname.png")})})
        };

        return(
            <HOCBackSwipe onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.h1}>КОНКУРС</Text>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>НАЗВА</Text>
                        <TextInput style={styles.input}
                                   editable
                                   maxLength={128}
                                   onChangeText={(text)=>{this.setState({title:text})}}
                                   value={this.state.title}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <Text style={styles.h2}>БРІФ</Text>
                        <TextColorButtons onChange={(text)=>{this.setState({brief:text})}} text={this.state.brief}/>
                        <TextInput style={styles.multiInput}
                                   editable
                                   maxLength={256}
                                   multiline
                                   numberOfLines={8}
                                   onChangeText = {(text)=>{this.setState({brief:text})}}
                                   value={this.state.brief}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <Text style={styles.h2}>ОПИС</Text>
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
                        <Text style={styles.h2}>EMAIL</Text>
                        <TextInput style={styles.input}
                                   editable
                                   onChangeText={(text)=>{this.setState({email:text})}}
                                   value={this.state.email}
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
    }
}

function mapDispatchToProps(dispatch){
    return {
        addContest:(obj)=>dispatch({type:"ADD_CONTEST",value:obj}),
        changeContest:(obj)=>dispatch({type:"CHANGE_CONTEST",value:obj})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EnrolleeContestsEditScreen);

