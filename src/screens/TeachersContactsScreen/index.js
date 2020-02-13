import React from 'react';
import {Alert,View,Text,Image,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import HOCSwipeBack from '../../hoc/GestureRightSwipe';
import styles from './Style';

class TeachersContactsScreen extends React.Component{
    constructor(props){
        super(props);
        const data = this.props.navigation.getParam("data")||null;
        this.state = {
            data:data
        };
    }
    render(){

        const onPressDelete = () => {
            Alert.alert(
                "Підтверждення",
                "Ви впевнені, що хочете видалити запис?",
                [
                    {text:"Ні",onPress:()=>{}},
                    {text:"Так",onPress:()=>{
                        this.props.deleteTeacher(this.state.data);
                        this.props.navigation.popToTop();
                        setTimeout(()=>{this.props.navigation.navigate("Menu")},100);
                    }}
                ]
            )
        };

        const onPressEdit = () => {
            this.props.navigation.navigate("TeacherEdit",{editMode: true,data:this.state.data})
        };

        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
                <View style={styles.screen}>
                    {true && <View style={styles.header}>
                        <TouchableOpacity style={styles.delete}
                            onPress={onPressDelete}>
                            <Text style={styles.deleteText}>ВИДАЛИТИ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onPressEdit}>
                            <Image style={styles.edit} source={require("../../assets/images/pen.png")}/>
                        </TouchableOpacity>
                    </View>}
                    <Text style={styles.h1}>{this.state.data.surname}</Text>
                    <Text style={styles.h2}>{this.state.data.firstname+" "+this.state.data.middlename}</Text>
                    <Image style={styles.photo} source={this.state.data.image}/>
                    <Text style={[styles.h2,styles.numberText]}>Viber: {this.state.data.viber}</Text>
                    <Text style={[styles.h2,styles.numberText]}>Telegram: {this.state.data.telegram}</Text>
                    <Text style={[styles.h2,styles.numberText]}>{this.state.data.email}</Text>
                </View>
            </HOCSwipeBack>
        );
    }
}

function mapStateToProps(state){
    return {

    }
}

function mapDispatchToProps(dispatch){
    return {
        deleteTeacher:(obj)=>dispatch({type:"DELETE_TEACHER",value:obj})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TeachersContactsScreen);
