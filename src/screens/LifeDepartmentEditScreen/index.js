import React from 'react';
import {Alert,View, Text, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import HOCBackSwipe from '../../hoc/GestureRightSwipe';
import Button from '../../components/AttentionButton';
import {generateKey} from '../../libs/methods';
import {connect} from 'react-redux';
import styles from './Style';
import ImagePicker from "react-native-image-crop-picker";
import DatePicker from '@react-native-community/datetimepicker';
import RNFS from "react-native-fs";

class LifeDepartmentEditScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id : generateKey(64),
            title:"",
            description:"",
            date: new Date(),
            image:require('../../assets/images/noname.png'),
            lida:""
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
            this.setState({date:date,datePickerIsVisible:false});
        };

        const onPressPublish = () => {

            const validTitle = this.state.title.length > 0;
            const validLida = this.state.lida.length > 0;
            const validDescription = this.state.description.length > 0;

            if(validTitle && validLida && validDescription){
                let editMode = this.props.navigation.getParam("editMode");

                const obj = {
                    title:this.state.title,
                    lida:this.state.lida,
                    description:this.state.description,
                    image:this.state.image,
                    date:this.state.date,
                    id:this.state.id
                };

                if(editMode){
                    this.props.changeDepartment(obj);
                }
                else{
                    this.props.addDepartment(obj);
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
                    <Text style={styles.h1}>ПУБЛІКАЦІЯ КОНТЕНТУ</Text>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>НАЗВА</Text>
                        <TextInput style={styles.input}
                                   editable
                                   maxLength={80}
                                   onChangeText={(text)=>{this.setState({title:text})}}
                                   value={this.state.title}
                        />
                    </View>
                    <View style={styles.pickerView}>
                        <TouchableOpacity onPress={onPressImagePicker}>
                            <Image style={styles.photo} source={require('../../assets/images/photo.png')}/>
                        </TouchableOpacity>
                        <Image style={styles.photo} source={this.state.image}/>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>ЛІДА</Text>
                        <TextInput style={styles.multiInput}
                                   editable
                                   maxLength={128}
                                   multiline
                                   numberOfLines={8}
                                   onChangeText = {(text)=>{this.setState({lida:text})}}
                                   value={this.state.lida}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>ОПИС НОВИНИ</Text>
                        <TextInput style={styles.multiInput}
                                   editable
                                   maxLength={128}
                                   multiline
                                   numberOfLines={8}
                                   onChangeText = {(text)=>{this.setState({description:text})}}
                                   value={this.state.description}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.h1}>ДАТА</Text>
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
                    <View sstyle={styles.empty}/>
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
        addDepartment:(obj)=>dispatch({type:"ADD_DEPARTMENT",value:obj}),
        changeDepartment:(obj)=>dispatch({type:"CHANGE_DEPARTMENT",value:obj})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LifeDepartmentEditScreen);

