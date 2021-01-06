import React from 'react';
import {View,Text,ScrollView,TouchableOpacity,Image,Alert} from 'react-native';
import {connect} from 'react-redux';
import ListItem from '../../components/RecordListItem';
import styles from './Style';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';
import {Picker} from "@react-native-community/picker";

class SessionListScreen extends React.Component{
    constructor(props){
        super(props);
        let course = this.props.navigation.getParam("course");
        let groups = Object.keys(this.props["course"+course].groups);
        console.log(groups);
        this.state = {
            sessions : this.props["course"+course].groups[groups[0]].sessions || [],
            course : course,
            groups : groups,
            pickerValue : groups[0]
        }
    }
    componentDidMount(){
        if(this.state.sessions.length === 0 && !this.props.adminMode){
            this.props.navigation.pop();
            this.props.navigation.navigate("NotFound");
        }
    }
    render(){

        const onPressAdd = () => {
            this.props.navigation.navigate("SessionEdit",{
                editMode:false,
                course:this.state.course,
                group:this.state.pickerValue});
        };

        const PickerItems = this.state.groups.map((currElem,index)=>{
            return <Picker.Item label={currElem} value={currElem}/>
        });

        const onChangePicker = (itemValue,itemIndex)=>{
            let schedule = this.props["course"+this.state.course].groups[itemValue];
            this.setState({
                pickerValue:itemValue,
                sessions : schedule.sessions
            })
        };

        const sortByDate = (elem1,elem2)=>{
            if(elem1.date > elem2.date) return 1;
            else if(elem1.date < elem2.date) return -1;
            else return 0;
        };

        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.header}>
                        <View style={styles.empty}/>
                        <Text style={[styles.h1]}>СЕСІЯ</Text>
                        {this.props.adminMode && <TouchableOpacity style={styles.add} onPress={onPressAdd}>
                            <Text style={styles.addText}>ДОДАТИ</Text>
                        </TouchableOpacity>}
                        {!this.props.adminMode && <View style={styles.empty}/>}
                    </View>
                    <View style={styles.groupView}>
                        <View style={styles.empty}/>
                        <Text style={styles.title}>{this.state.pickerValue}</Text>
                        <Picker
                            selectedValue={this.state.pickerValue}
                            style={styles.picker}
                            itemStyle={styles.p}
                            onValueChange={onChangePicker}
                            mode={'dialog'}
                        >
                            {PickerItems}
                        </Picker>
                    </View>
                    {this.state.sessions.sort(sortByDate).map((currElem)=>{
                        let teacher = this.props.teachers.find((element)=>{
                            if(element.id === currElem.teacher) return true;
                            else return false;
                        });
                        const onPressTeacher = () => {
                            this.props.navigation.navigate("TeacherInfo",
                                {
                                    data:teacher
                                });
                        };

                        const onPressDelete = () => {
                            Alert.alert("Підтвердження","Ви впевнені, що хочете видалити запис?",
                            [
                                {text:"Ні",onPress:()=>{}},
                                {text:"Так",onPress:()=>{
                                    this.props.deleteSession(currElem,this.state.course,this.state.pickerValue);
                                    this.props.navigation.pop();
                                    }}
                            ])
                        };

                        const onPressEdit = () => {
                            this.props.navigation.navigate("SessionEdit",{
                                editMode:true,
                                data:currElem,
                                course:this.state.course,
                                group:this.state.pickerValue})
                        };

                        let month = currElem.date.getMonth()+1;
                        if(month < 10) month = "0"+month;
                        const date = currElem.date.getDate()+"."+month+"."+currElem.date.getFullYear();
                        const time = currElem.date.getHours()+":"+currElem.date.getMinutes();
                        const text = date+" - "+currElem.title+" - "+time;
                        return(
                            <ListItem
                                navigation={this.props.navigation}
                                data={currElem}
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
                    {this.state.sessions.length === 0 && <Text style={styles.h2}>Нажаль, дані відсутні</Text>}
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
        teachers:state.teacher.arr,
        adminMode:state.global.adminMode
    }
}

function mapDispatchToProps(dispatch){
    return {
        deleteSession:(obj,course,group)=>dispatch({type:"DELETE_SESSION",value:obj,course,group})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SessionListScreen);
