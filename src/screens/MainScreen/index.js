import React from 'react';
import {Alert,View,ScrollView,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import styles from './Style';
import Button from '../../components/AttentionButton';
import OutlinedButton from '../../components/OutlinedAttentionButton';
import TextField from '../../components/SearchField';
import GestureSecretSwipe from '../../hoc/GestureSecretSwipe';

class MainScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchText: '',
            tapButton: 0
        };
    }
    onPressNavigateTo(routeName){
        this.props.navigation.navigate(routeName);
    }
    render(){

        const onPressSaveChanges = () => {
            Alert.alert("Підтвердження","Ви впевнені, що хочете зберегти зміни?",
                [
                    {text:"Ні",onPress:()=>{}},
                    {text:"Так",onPress:()=>{
                            this.props.saveChanges();
                            setTimeout(this.props.disableSavingProcess,500);
                        }}
                    ]
                )
        };

        const onPressCancelChanges = () => {
            Alert.alert("Підтвердження", "Ви впевнені, що хочете відмінити зміни?",
                    [
                        {text:"Ні",onPress:()=>{}},
                        {text:"Так",onPress:()=>{
                            this.props.cancelChanges();
                        }}
                    ]
                )
        };

        return(
            <GestureSecretSwipe tapCounter={this.state.tapButton} navigation={this.props.navigation}>
                <View style={styles.screen}>
                    <ScrollView style={{}}>
                        <TextField/>
                        <Button title={"Наші Викладачі".toUpperCase()} onPress={()=>{this.onPressNavigateTo("Teachers")}}/>
                        <Button title={"Зрозумілий розклад".toUpperCase()} onPress={()=>{this.onPressNavigateTo("Schedule")}}/>
                        <Button title={"Домашнє завдання".toUpperCase()} onPress={()=>{this.onPressNavigateTo("Tasks")}}/>
                        <Button title={"Можливості".toUpperCase()} onPress={()=>{this.onPressNavigateTo("Opportunities")}}/>
                        <Button title={"Життя кафедри".toUpperCase()} onPress={()=>{this.onPressNavigateTo("LifeDepartment")}}/>
                        <Button title={"Робота".toUpperCase()} onPress={()=>{this.onPressNavigateTo("Works")}}/>
                        <Button title={"Абітурієнтам".toUpperCase()} onPress={()=>{this.onPressNavigateTo("Enrollee")}}/>
                        {this.props.adminMode && <OutlinedButton title={"ПІДТВЕРДИТИ ЗМІНИ"} onPress={onPressSaveChanges}/>}
                        {this.props.adminMode && <OutlinedButton title={"ВІДМІНИТИ ЗМІНИ"} onPress={onPressCancelChanges}/>}
                    </ScrollView>
                    <TouchableOpacity
                        style={styles.secretButton}
                        onPress={()=>{this.setState({tapButton:this.state.tapButton+1})}}
                    />
                </View>
            </GestureSecretSwipe>
        );
    }
}

function mapStateToProps(state){
    return{
        adminMode:state.global.adminMode
    }
}

function mapDispatchToProps(dispatch){
    return{
        saveChanges:()=>{dispatch({type:"SAVE_GLOBAL_DATA"})},
        disableSavingProcess:()=>{dispatch({type:"RESET_SAVING_MODE"})},
        cancelChanges:()=>{dispatch({type:"CANCEL_GLOBAL_DATA"})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainScreen);
