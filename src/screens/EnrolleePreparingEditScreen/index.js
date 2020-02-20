import React from 'react';
import {Alert,View,Text,TextInput,ScrollView} from 'react-native';
import TextColorButtons from '../../components/TextColorButtons';
import Button from '../../components/AttentionButton';
import HOCBackSwipe from '../../hoc/GestureRightSwipe';
import {generateKey} from "../../libs/methods";
import {connect} from 'react-redux';
import styles from './Style';

class EnrolleePreparingEditScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id:generateKey(64),
            title:"",
            description:"",
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

            const validDescription = this.state.description.length > 0;
            const validTitle = this.state.title.length > 0;

            if(validTitle && validDescription) {
                if (isEdit) {
                    this.props.changePrepare(this.state);
                } else {
                    this.props.addPrepare(this.state);
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
                    <Text style={styles.h1}>МОЖЛИВОСТІ</Text>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>НАЗВА</Text>
                        <TextInput style={styles.input}
                                   editable
                                   maxLength={128}
                                   onChangeText={(text)=>{this.setState({title:text})}}
                                   value={this.state.title}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>ОПИС</Text>
                        <TextColorButtons onChange={(text)=>{this.setState({description:text})}} text={this.state.description}/>
                        <TextInput style={styles.multiInput}
                                   editable
                                   maxLength={1024}
                                   multiline
                                   numberOfLines={8}
                                   onChangeText = {(text)=>{this.setState({description:text})}}
                                   value={this.state.description}
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
        addPrepare:(obj)=>dispatch({type:"ADD_PREPARE_ZNO",value:obj}),
        changePrepare:(obj)=>dispatch({type:"CHANGE_PREPARE_ZNO",value:obj})
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(EnrolleePreparingEditScreen);
