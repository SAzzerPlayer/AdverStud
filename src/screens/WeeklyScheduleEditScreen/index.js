import React from 'react';
import {Alert,View,Text,TextInput,ScrollView} from 'react-native';
import Button from '../../components/AttentionButton';
import HOCBackSwipe from '../../hoc/GestureRightSwipe';
import {generateKey} from "../../libs/methods";
import {connect} from 'react-redux';
import styles from './Style';

class WeeklyScheduleEditScreen extends React.Component{
    constructor(props){
        super(props);
        let schedule = this.props.navigation.getParam("schedule");
        let week = this.props.navigation.getParam("week");
        let group = this.props.navigation.getParam("group");
        let course = this.props.navigation.getParam("course");
        this.state = {
            schedule,
            week,
            group,
            course,
            monday:schedule.monday,
            tuesday:schedule.tuesday,
            wednesday:schedule.wednesday,
            thursday:schedule.thursday,
            friday:schedule.friday
        }
    }
    render(){

        const onPressPublish = () => {

            const validMonday = this.state.monday.length > 0;
            const validThursday = this.state.thursday.length > 0;
            const validWednesday = this.state.wednesday.length > 0;
            const validTuesday = this.state.tuesday.length > 0;
            const validFriday = this.state.friday.length > 0;

            if(validMonday && validThursday && validWednesday &&
            validTuesday && validFriday) {
                let schedule = {
                    monday:this.state.monday,
                    tuesday:this.state.tuesday,
                    wednesday:this.state.wednesday,
                    thursday:this.state.thursday,
                    friday:this.state.friday
                };
                this.props.changeWeeklySchedule(schedule,this.state.week,this.state.group,this.state.course);
                this.props.navigation.popToTop();
                setTimeout(()=>{this.props.navigation.navigate("Menu")},100);
            }
            else{
                Alert.alert("Помилка!","Ви ввели невірні дані")
            }
        };

        return(
            <HOCBackSwipe onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.h1}>РОЗКЛАД</Text>
                    <Text style={[styles.h2,{textAlign:'center'}]}>{this.state.group}</Text>
                    <Text style={[styles.h2,{textAlign:"center"}]}>{this.state.week}</Text>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>ПОНЕДІЛОК</Text>
                        <TextInput style={styles.multiInput}
                                   editable
                                   maxLength={1024}
                                   multiline
                                   numberOfLines={8}
                                   onChangeText = {(text)=>{this.setState({monday:text})}}
                                   value={this.state.monday}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>ВІВТОРОК</Text>
                        <TextInput style={styles.multiInput}
                                   editable
                                   maxLength={1024}
                                   multiline
                                   numberOfLines={8}
                                   onChangeText = {(text)=>{this.setState({tuesday:text})}}
                                   value={this.state.tuesday}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>СЕРЕДА</Text>
                        <TextInput style={styles.multiInput}
                                   editable
                                   maxLength={1024}
                                   multiline
                                   numberOfLines={8}
                                   onChangeText = {(text)=>{this.setState({wednesday:text})}}
                                   value={this.state.wednesday}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>ЧЕТВЕР</Text>
                        <TextInput style={styles.multiInput}
                                   editable
                                   maxLength={1024}
                                   multiline
                                   numberOfLines={8}
                                   onChangeText = {(text)=>{this.setState({thursday:text})}}
                                   value={this.state.thursday}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>П'ЯТНИЦЯ</Text>
                        <TextInput style={styles.multiInput}
                                   editable
                                   maxLength={1024}
                                   multiline
                                   numberOfLines={8}
                                   onChangeText = {(text)=>{this.setState({friday:text})}}
                                   value={this.state.friday}
                        />
                    </View>
                    <Button
                        title={"ОПУБЛІКУВАТИ"}
                        onPress={onPressPublish}
                    />
                    <View style={styles.empty}/>
                </ScrollView>
            </View>
            </HOCBackSwipe>
        );
    }
}

function mapStateToProps(state){
    return {

    };
}

function mapDispatchToProps(dispatch){
    return {
        changeWeeklySchedule:(schedule,week,group,course)=>dispatch({type:"CHANGE_WEEKLY_SCHEDULE",value:schedule,week,group,course}),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(WeeklyScheduleEditScreen)
