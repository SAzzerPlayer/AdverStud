import React from 'react';
import {View,Text,ScrollView,TouchableOpacity,Alert} from 'react-native';
import {connect} from 'react-redux';
import {Picker} from '@react-native-community/picker';
import TaskView from '../../components/TaskView';
import styles from './Style';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

class TasksDeadlineScreen extends React.Component{
    constructor(props){
        super(props);
        let course = this.props.navigation.getParam("course");
        let groups = Object.keys(this.props["course"+course].groups);
        console.log(this.props["course"+course]);
        let homeworks = this.props["course"+course].groups[groups[0]];
        this.state = {
            week:this.props.navigation.getParam("week"),
            groups: groups,
            pickerValue: groups[0],
            homeworks:homeworks,
            course:course
        }
    }
    render(){
        const PickerItems = this.state.groups.map((currElem,index)=>{
            return <Picker.Item label={currElem} value={currElem}/>
        });

        const onChangePicker = (itemValue,itemIndex)=>{
            this.setState({
                pickerValue:itemValue,
                homeworks:this.props["course"+this.state.course].groups[itemValue]
            })
        };

        const onPressNavigate = () => {
            this.props.navigation.navigate("TaskDeadlineDescription");
        };

        const onPressAdd = () => {
            this.props.navigation.navigate("TaskDeadlineEdit",{
                editMode:false,
                course:this.state.course,
                group:this.state.pickerValue
            })
        };

        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.header}>
                        <View style={styles.empty}/>
                        <Text style={[styles.h1,{marginBottom:0}]}>ДЕДЛАЙНИ</Text>
                        {true && <TouchableOpacity style={styles.add} onPress={onPressAdd}>
                            <Text style={styles.addText}>ДОДАТИ</Text>
                        </TouchableOpacity>}
                        {false && <View style={styles.empty}/>}
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
                    {this.state.homeworks.map((currElem,index)=>{
                        const onPressDelete = () => {
                            Alert.alert("Підтвердження","Ви впевнені, що хочете видалити запис?",
                                [
                                    {text:"Ні",onPress:()=>{}},
                                    {text:"Так",onPress:()=>{
                                            this.props.deleteHomework(this.state.course,this.state.pickerValue,currElem);
                                        }}
                                ]
                            );
                        };
                        console.log(index);
                        return (
                            <TaskView
                                data={currElem}
                                navigation={this.props.navigation}
                                onPressDelete={onPressDelete}
                                course = {this.state.course}
                                group = {this.state.pickerValue}
                                key={index}
                                index={index+1}
                            />
                        )
                    })}
                    {this.state.homeworks.length === 0 && <Text style={styles.h2}>Нажаль, дані відсутні</Text>}
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}

function mapStateToProps(state){
    return {
        course1: state.homework.course1,
        course2: state.homework.course2,
        course3: state.homework.course3,
        course4: state.homework.course4,
        course5: state.homework.course5
    }
}

function mapDispatchToProps(dispatch){
    return{
        deleteHomework:(course,group,obj)=>dispatch({type:"DELETE_HOMEWORK",course,group,value:obj}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TasksDeadlineScreen);

