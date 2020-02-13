import React from 'react';
import {View,Text,ScrollView, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import styles from './Style';
import TeacherView from '../../components/TeacherShortInfo';
import HOCSwipeBack from '../../hoc/GestureRightSwipe';


class TeachersScreen extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const onPressAdd = () => {
            console.log(this.props.teachers);
            this.props.navigation.navigate("TeacherEdit",{editMode:false})
        };
        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <View style={styles.header}>
                    <View style={styles.empty}/>
                    <Text style={styles.h1}>Викладачі</Text>
                    {true && <TouchableOpacity style={styles.add}
                        onPress={onPressAdd}
                    >
                        <Text style={styles.addText}>ДОДАТИ</Text>
                    </TouchableOpacity>}
                    {false && <View style={styles.empty}/>}
                </View>
                <Text style={styles.h2}>Кафедра реклами та PR</Text>
                <ScrollView>
                    {this.props.teachers.map((currElem,index)=>{
                        return <TeacherView key={index}
                                            data = {currElem}
                                            onPress={()=>{this.props.navigation.navigate("TeacherContact",{data:currElem})}}
                                            navigation={this.props.navigation}

                        />
                    })}
                    {this.props.teachers.length===0 && <Text style={styles.h2}>Нажаль, дані відсутні</Text>}
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}

function mapStateToProps(state){
    return {
        teachers:state.teacher.arr
    }
}

export default connect(mapStateToProps)(TeachersScreen);
