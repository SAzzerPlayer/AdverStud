import React from 'react';
import {Alert,View,Text,TextInput,ScrollView} from 'react-native';
import Button from '../../components/AttentionButton';
import HOCBackSwipe from '../../hoc/GestureRightSwipe';
import {generateKey} from "../../libs/methods";
import {connect} from 'react-redux';
import styles from './Style';

class WorkEditScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id:generateKey(64),
            name:"",
            description:"",
            url:""
        }
    }
    componentDidMount(){
        if(this.props.navigation.getParam("editMode")){
            this.setState({...this.props.navigation.getParam("data")});
        }
    }
    render(){

        const onPressPublish = () => {
            let isEdit = this.props.navigation.getParam("editMode");

            const validUrl = this.state.url.length > 0;
            const validDescription = this.state.description.length > 0;
            const validName = this.state.name.length > 0;

            if(validUrl && validDescription && validName) {
                if (isEdit) {
                    this.props.changeWork(this.state);
                } else {
                    this.props.addWork(this.state);
                }
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
                    <Text style={styles.h1}>РОБОТА</Text>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>НАЗВА ЗАКЛАДУ</Text>
                        <TextInput style={styles.input}
                                   editable
                                   maxLength={80}
                                   onChangeText={(text)=>{this.setState({name:text})}}
                                   value={this.state.name}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>ВИМОГИ</Text>
                        <TextInput style={styles.multiInput}
                                   editable
                                   maxLength={128}
                                   multiline
                                   numberOfLines={8}
                                   onChangeText = {(text)=>{this.setState({description:text})}}
                                   value={this.state.description}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>URL-АДРЕС</Text>
                        <TextInput style={styles.input}
                                   editable
                                   onChangeText={(text)=>{this.setState({url:text})}}
                                   value={this.state.url}
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
        addWork:(obj)=>dispatch({type:"ADD_WORK",value:obj}),
        changeWork:(obj)=>dispatch({type:"CHANGE_WORK",value:obj})
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkEditScreen)
