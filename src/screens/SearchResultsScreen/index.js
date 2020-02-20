import React from 'react';
import {View, Text, Image, TouchableOpacity,ScrollView} from 'react-native';
import HOCBackSwipe from '../../hoc/GestureRightSwipe';
import Button from '../../components/AttentionButton';
import SmallButton from '../../components/SmallAttentionButton';
import styles from './Style';
import {connect} from 'react-redux';


class SearchResultsScreen extends React.Component{
    constructor(props){
        super(props);
        let text = this.props.navigation.getParam("text").toLowerCase();
        let teachers = this.props.teachers;

        let auxTeachers = [];
        for(let element of teachers){
            if(element.surname.toLowerCase().includes(text) ||
            element.middlename.toLowerCase().includes(text) ||
            element.firstname.toLowerCase().includes(text)){
                auxTeachers.push(element);
            }
        }
        teachers = auxTeachers;

        let quests = this.props.quests;

        let auxQuests = [];

        for(let element of quests){
            if(element.title.toLowerCase().includes(text) ||
            element.description.toLowerCase().includes(text)){
                auxQuests.push(element);
            }
        }

        quests = auxQuests;

        let department = this.props.department;
        let auxDepartment = [];

        for(let element of department){
            if(element.title.toLowerCase().includes(text) ||
                element.description.toLowerCase().includes(text)){
                auxDepartment.push(element);
            }
        }
        department = auxDepartment;

        let contests = this.props.contests;
        let auxContests = [];

        for(let element of contests){
            if(element.title.toLowerCase().includes(text) ||
            element.description.toLowerCase().includes(text)){
                auxContests.push(element);
            }
        }
        contests = auxContests;
        let deadline = this.props.deadline;
        let auxDeadline = [];

        for(let i = 1; i < 6; i++){
            let course = deadline["course"+i];
            if(course.groups){
                for(let groupKey of Object.keys(course.groups)){
                    for(let task of course.groups[groupKey]){
                        if(task.title.toLowerCase().includes(text) ||
                        task.description.toLowerCase().includes(text)) {
                            let obj = {
                                text: groupKey + ": " + task.title,
                                data: task
                            };
                            auxDeadline.push(obj);
                        }
                    }
                }
            }
        }
        deadline = auxDeadline;

        this.state = {
            text:this.props.navigation.getParam("text"),
            isShownTeachers: false,
            isShownContests: false,
            isShownQuests: false,
            isShownDepartment: false,
            isShownDeadline: false,
            teachers,
            quests,
            department,
            contests,
            deadline
        }
    }
    componentDidMount(){
        console.log("Contests:",this.props.contests.length);
        console.log("Quests:",this.props.quests.length);
        console.log("Teachers:",this.props.teachers.length);
        console.log("Department:",this.props.department.length);
    }
    render(){

        const ListItem = (props) => {
            return (
                <View style={styles.listItem}>
                    <Text style={styles.listTitle}>{props.text}</Text>
                    <SmallButton style={{marginBottom:0}} title={"БІЛЬШЕ"} onPress={()=>{this.props.navigation.navigate(props.path,{data:props.data})}}/>
                </View>
            )
        };

        return (
            <HOCBackSwipe onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.h1}>РЕЗУЛЬТАТИ ПОШУКУ</Text>
                    <Text style={styles.h2}>"{this.state.text}"</Text>
                    {/*TeachersBlock*/}
                    {this.state.teachers.length > 0 && <Button title={"ВИКЛАДАЧІВ: "+this.state.teachers.length}
                            active={this.state.isShownTeachers}
                            onPress={()=>{this.setState({isShownTeachers:!this.state.isShownTeachers})}}
                    />}
                    {this.state.teachers.map((currElem,index)=>{
                        return this.state.isShownTeachers &&
                            <ListItem
                                text={currElem.surname+" "+currElem.firstname+" "+currElem.middlename}
                                path={"TeacherContact"}
                                data = {currElem}
                                key={index}
                            />;
                    })}
                    {/*DeadlineBlock*/}
                    {this.state.deadline.length > 0 && <Button title={"ЗАВДАНЬ: "+this.state.deadline.length}
                            active={this.state.isShownDeadline}
                            onPress={()=>{this.setState({isShownDeadline:!this.state.isShownDeadline})}}
                    />}
                    {this.state.deadline.map((currElem,index)=>{
                        return this.state.isShownDeadline &&
                            <ListItem
                                text={currElem.text}
                                path={"TaskDescription"}
                                data = {currElem.data}
                                key={index}
                            />;
                    })}
                    {/*ContestsBlock*/}
                    {this.state.contests.length > 0 && <Button title={"КОНКУРСІВ: "+this.state.contests.length}
                            active={this.state.isShownContests}
                            onPress={()=>{this.setState({isShownContests:!this.state.isShownContests})}}
                    />}
                    {this.state.contests.map((currElem,index)=>{
                        return this.state.isShownContests &&
                            <ListItem
                                text={currElem.title}
                                path={"ContestDescription"}
                                data = {currElem}
                                key={index}
                            />;
                    })}
                    {/*QuestsBlock*/}
                    {this.state.quests.length > 0 && <Button title={"КВЕСТІВ: "+this.state.quests.length}
                            active={this.state.isShownQuests}
                            onPress={()=>{this.setState({isShownQuests:!this.state.isShownQuests})}}
                    />}
                    {this.state.quests.map((currElem,index)=>{
                        return this.state.isShownQuests &&
                            <ListItem
                                text={currElem.title}
                                path={"QuestDescription"}
                                data = {currElem}
                                key={index}
                            />;
                    })}
                    {/*DepartmentBlock*/}
                    {this.state.department.length > 0 && <Button title={"НОВИН: "+this.state.department.length}
                            active={this.state.isShownDepartment}
                            onPress={()=>{this.setState({isShownDepartment:!this.state.isShownDepartment})}}
                    />}
                    {this.state.department.map((currElem,index)=>{
                        return this.state.isShownDepartment &&
                            <ListItem
                                text={currElem.title}
                                path={"DepartmentDescription"}
                                data = {currElem}
                                key={index}
                            />;
                    })}
                    {this.state.teachers.length === 0 &&
                    this.state.quests.length === 0 &&
                    this.state.contests.length === 0 &&
                    this.state.department.length === 0 &&
                    <Text style={styles.h2}>Нажаль, нічого не знайдено</Text>}
                </ScrollView>
            </View>
            </HOCBackSwipe>
        )
    }
}

function mapStateToProps(state){
    return {
        quests: state.enrollee.quests,
        contests: state.enrollee.contests,
        department: state.department.arr,
        deadline: state.homework,
        teachers: state.teacher.arr
    }
}

function mapDispatchToProps(dispatch){
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchResultsScreen);
