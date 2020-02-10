import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import styles from './Style';
import TeacherView from '../../components/TeacherShortInfo';
import HOCSwipeBack from '../../hoc/GestureRightSwipe';


class TeachersScreen extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <Text style={styles.h1}>Викладачі</Text>
                <Text style={styles.h2}>Кафедра реклами та PR</Text>
                <ScrollView>
                    {[1,2,3,4,5].map((currElem,index)=>{
                        return <TeacherView key={index}
                            onPress={()=>{this.props.navigation.navigate("TeacherContact")}}
                        />
                    })}
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}
//const Screen = () => (<HOCSwipeBack><TeachersScreen/></HOCSwipeBack>);
export default TeachersScreen;
