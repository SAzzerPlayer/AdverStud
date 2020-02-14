import React from 'react';
import {View,Text,ScrollView,TouchableOpacity,Image} from 'react-native';
import {connect} from 'react-redux';
import {Picker} from '@react-native-community/picker';
import styles from './Style';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

class WeeklyScheduleScreen extends React.Component{
    constructor(props){
        super(props);
        const course = this.props.navigation.getParam("course");
        const zeroGroup = Object.keys(this.props["course"+course].groups)[0];
        let schedule = this.props["course"+course].groups[zeroGroup];
        if(this.props.navigation.getParam("week")==="ЧИСЕЛЬНИК"){
            schedule = schedule.numerator;
        }
        else schedule = schedule.denominator;
        this.state = {
            week:this.props.navigation.getParam("week"),
            course:course,
            groups: Object.keys(this.props["course"+course].groups)||[],
            pickerValue: zeroGroup,
            schedule: schedule
        };
        console.log(new Date().getDay());
    }
    render(){
        const PickerItems = this.state.groups.map((currElem,index)=>{
            return <Picker.Item label={currElem} value={currElem}/>
        });

        const onChangePicker = (itemValue,itemIndex)=>{
            this.setState({
                pickerValue:itemValue
            })
        };

        const onPressEdit = () => {
            this.props.navigation.navigate("WeekScheduleEdit",{
                schedule:this.state.schedule,
                group:this.state.pickerValue,
                week:this.state.week,
                course:this.state.course
            })
        };

        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={[styles.h1,{marginTop:90}]}>{this.state.week}</Text>
                    <View style={styles.groupView}>
                        {this.props.adminMode && <TouchableOpacity style={styles.empty} onPress={onPressEdit}>
                            <Image style={styles.edit} source={require("../../assets/images/pen.png")}/>
                        </TouchableOpacity>}
                        {!this.props.adminMode && <View style={styles.empty}/>}
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
                    {new Date().getDay() === 1 &&
                    <Text style={[styles.h2,styles.active]}>ПОНЕДІЛОК</Text>}
                    {new Date().getDay() !== 1 &&
                    <Text style={[styles.h2]}>ПОНЕДІЛОК</Text>}

                    <Text style={styles.p}>{this.state.schedule.monday}</Text>
                    {new Date().getDay() === 2 && <Text style={[styles.h2,styles.active]}>ВІВТОРОК</Text>}
                    {new Date().getDay() !== 2 && <Text style={[styles.h2]}>ВІВТОРОК</Text>}

                    <Text style={styles.p}>{this.state.schedule.tuesday}</Text>
                    {new Date().getDay() === 3 && <Text style={[styles.h2,styles.active]}>СЕРЕДА</Text>}
                    {new Date().getDay() !== 3 && <Text style={[styles.h2]}>СЕРЕДА</Text>}

                    <Text style={styles.p}>{this.state.schedule.wednesday}</Text>
                    {new Date().getDay() === 4 && <Text style={[styles.h2,styles.active]}>ЧЕТВЕР</Text>}
                    {new Date().getDay() !== 4 && <Text style={[styles.h2]}>ЧЕТВЕР</Text>}

                    <Text style={styles.p}>{this.state.schedule.thursday}</Text>
                    {new Date().getDay() === 5 && <Text style={[styles.h2,styles.active]}>П'ЯТНИЦЯ</Text>}
                    {new Date().getDay() !== 5 && <Text style={[styles.h2]}>П'ЯТНИЦЯ</Text>}

                    <Text style={styles.p}>{this.state.schedule.friday}</Text>
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
        adminMode:state.global.adminMode
    }
}

export default connect(mapStateToProps)(WeeklyScheduleScreen);
