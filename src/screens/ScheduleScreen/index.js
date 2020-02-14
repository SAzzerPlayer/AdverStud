import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import DatePicker from '@react-native-community/datetimepicker';
import styles from './Style';
import Button from '../../components/AttentionButton';
import OutlinedButton from '../../components/OutlinedAttentionButton';
import SearchField from '../../components/SearchField';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

class ScheduleScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isChangingDate : false,
            date : this.props.studyBeginAt
        }
    }

    onPressNavigateTo(routeName,course){
        this.props.navigation.navigate(routeName,{course});
    }
    render(){

        const onPressChangeDate = () => {
            this.setState({isChangingDate:true});
        };

        const onChangeDate = (event,date)=>{
            this.setState({date:date||new Date(),isChangingDate:false});
            this.props.changeStudyBeginDate(date||new Date());
        };

        const dateText = this.state.date.getDate()+"."+(this.state.date.getMonth()+1)+"."+this.state.date.getFullYear();

        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                {/*<SearchField/>*/}
                <Text style={styles.h1}>РОЗКЛАД</Text>
                <Button title={"1 КУРС"}
                        onPress={()=>{this.onPressNavigateTo("ScheduleCourseList",1)}}
                />
                <Button title={"2 КУРС"}
                        onPress={()=>{this.onPressNavigateTo("ScheduleCourseList",2)}}
                />
                <Button title={"3 КУРС"}
                        onPress={()=>{this.onPressNavigateTo("ScheduleCourseList",3)}}
                />
                <Button title={"4 КУРС"}
                        onPress={()=>{this.onPressNavigateTo("ScheduleCourseList",4)}}
                />
                <Button title={"5 КУРС"}
                        onPress={()=>{this.onPressNavigateTo("ScheduleCourseList",5)}}
                />
                {this.props.adminMode && <OutlinedButton title={"ДАТА ПОЧАТКУ ЗАНЯТЬ\n"+dateText} onPress={onPressChangeDate}/>}
                {this.state.isChangingDate && <DatePicker
                    value={this.state.date}
                    onChange={onChangeDate}
                    display={"default"}
                    mode={"date"}
                    is24Hour
                />}
            </View>
            </HOCSwipeBack>
        );
    }
}

function mapStateToProps(state){
    return {
        studyBeginAt:state.global.studyBeginAt,
        adminMode:state.global.adminMode
    }
}

function mapDispatchToProps(dispatch){
    return {
        changeStudyBeginDate: (date)=>dispatch({type:"CHANGE_STUDY_DATE_BEGIN",value:date})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ScheduleScreen);
