import React from 'react';
import {Alert,View,Linking,Text,TextInput,ScrollView} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {connect} from 'react-redux';
import styles from './Style';
import Button from '../../components/AttentionButton';
import OutlinedButton from '../../components/OutlinedAttentionButton';
import HOCSwipeBack from '../../hoc/GestureRightSwipe';

class TasksCourseScreen extends React.Component{
    constructor(props){
        super(props);
        const course = this.props.navigation.getParam("course");
        this.state = {
            groups: Object.keys(this.props["course"+course].groups)||[],
            link: this.props["course"+course].link,
            newGroup: "",
            isChangingLink:false,
            titleChangeLink:"ЗМІНИТИ ПОСИЛАННЯ",
            course:course,
            pickerValue: Object.keys(this.props["course"+course].groups)[0]||"Оберіть"
        };
        console.log(Object.keys(this.props["course"+course].groups))
    }

    onPressNavigateTo(routeName){
        if(Object.keys(this.state.groups).length === 0){
            this.props.navigation.navigate("NotFound");
        }
        else this.props.navigation.navigate(routeName,{course:this.state.course});
    }
    render(){

        const course = this.props.navigation.getParam("course")+" КУРС";

        const onPressLink = () => {
            Linking.openURL(this.state.link);
        };

        const onPressChangeLink = () => {
            if(this.state.isChangingLink){
                this.setState({
                    isChangingLink:false,
                    titleChangeLink:"ЗМІНИТИ ПОСИЛАННЯ"
                });
                this.props.changeLink(this.state.course,this.state.link);
            }
            else{
                this.setState({
                    isChangingLink:true,
                    titleChangeLink:"ОК"
                })
            }
        };

        const onPressAddGroup = () => {
            if(this.state.newGroup.length > 0) {
                if(!this.state.groups.includes(this.state.newGroup)) {
                    let groupName = this.state.newGroup;
                    this.props.addGroup(this.state.course, groupName);
                    let groups = this.state.groups;
                    groups.push(groupName);
                    this.setState({groups, addGroup: ""});
                    Alert.alert("Успішно!", "Група була успішно додана до списку");
                }
                else Alert.alert("Помилка","Ця група вже існує в записах!")
            }
            else Alert.alert("Помилка","Поле назви групи порожнє!")
        };

        const onPressDeleteGroup = () => {
            if(this.state.groups.length > 0) {
                Alert.alert("Підтвердження", "Ви впевнені, що хочете видалити групу?",
                    [
                        {
                            text: "Ні", onPress: () => {
                            }
                        },
                        {
                            text: "Так", onPress: () => {
                                let groups = this.state.groups;
                                let selected = this.state.pickerValue;
                                groups.splice(groups.indexOf(selected), 1);
                                this.setState({groups, selected: 'Оберіть'});
                                this.props.deleteGroup(this.state.course, selected);
                            }
                        }
                    ])
            }
            else Alert.alert("Помилка","Список груп порожній!")
        };

        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.h1}>{course}</Text>
                    <Button title={"Дедлайни".toUpperCase()} onPress={()=>{this.onPressNavigateTo("TaskDeadline")}}/>
                    <Button title={"Матеріали за предметами".toUpperCase()} onPress={onPressLink}/>
                    <OutlinedButton title={this.state.titleChangeLink} onPress={onPressChangeLink}/>
                    <TextInput
                        editable={this.state.isChangingLink}
                        style={styles.input}
                        value={this.state.link}
                        onChangeText={(text)=>{this.setState({link:text})}}
                        placeholder={"URL-адрес"}
                    />
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
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}


function mapStateToProps(state){
    return {
        course1:state.homework.course1,
        course2:state.homework.course2,
        course3:state.homework.course3,
        course4:state.homework.course4,
        course5:state.homework.course5
    }
}

function mapDispatchToProps(dispatch){
    return {
        changeLink:(course,link)=>dispatch({type:"CHANGE_HOMEWORK_COURSE_LINK",value:link,course}),
        deleteGroup:(course,group)=>dispatch({type:"DELETE_HOMEWORK_COURSE_GROUP",value:group,course}),
        addGroup:(course,group)=>dispatch({type:"ADD_HOMEWORK_COURSE_GROUP",value:group,course})
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(TasksCourseScreen);
