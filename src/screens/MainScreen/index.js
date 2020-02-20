import React from 'react';
import {Alert,View,ScrollView,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import styles from './Style';
import Button from '../../components/AttentionButton';
import OutlinedButton from '../../components/OutlinedAttentionButton';
import TextField from '../../components/SearchField';
import GestureSecretSwipe from '../../hoc/GestureSecretSwipe';
import RNFS from 'react-native-fs';

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

        const loadCacheData = async () => {
            let cacheData = JSON.parse(await RNFS.readFile(RNFS.DocumentDirectoryPath+"/snapshot.json"));
            if (cacheData.teachers) this.props.loadTeachers(cacheData.teachers.arr);
            if (cacheData.schedule) this.props.loadSchedule(cacheData.schedule);
            if (cacheData.homework) this.props.loadHomeworks(cacheData.homework);
            if (cacheData.departments) this.props.loadDepartments(cacheData.departments);
            if (cacheData.opportunities) this.props.loadOpportunities(cacheData.opportunities);
            if (cacheData.global) this.props.loadGlobal(cacheData.global);
            if (cacheData.works) this.props.loadWorks(cacheData.works);
            if (cacheData.enrollee) this.props.loadEnrollee(cacheData.enrollee);
            Alert.alert("Відновлено","Дані були відновлені до останнього знімку даних");
        };

        const onPressCancelChanges = () => {
            Alert.alert("Підтвердження", "Ви впевнені, що хочете відмінити зміни?",
                    [
                        {text:"Ні",onPress:()=>{}},
                        {text:"Так",onPress:loadCacheData}
                    ]
                )
        };

        const onChangeText = (text) => {
            this.setState({searchText:text})
        };

        const onPressSearch = () => {
            if(this.state.searchText.length > 0) {
                this.props.navigation.navigate("Search", {text: this.state.searchText});
            }
        };

        return(
            <GestureSecretSwipe tapCounter={this.state.tapButton} navigation={this.props.navigation}>
                <View style={styles.screen}>
                    <ScrollView style={{}} showsVerticalScrollIndicator={false}>
                        <TextField value={this.state.searchText}
                                   onChangeText={onChangeText}
                                   onPressSearch = {onPressSearch}/>
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
        cancelChanges:()=>{dispatch({type:"CANCEL_GLOBAL_DATA"})},
        loadTeachers:(obj)=>dispatch({type:"LOAD_TEACHERS",value:obj}),
        loadSchedule:(obj)=>dispatch({type:"LOAD_SCHEDULE",value:obj}),
        loadOpportunities:(obj)=>dispatch({type:"LOAD_OPPORTUNITIES",value:obj}),
        loadWorks:(obj)=>dispatch({type:"LOAD_WORKS",value:obj}),
        loadHomeworks:(obj)=>dispatch({type:"LOAD_HOMEWORKS",value:obj}),
        loadDepartments:(obj)=>dispatch({type:"LOAD_DEPARTMENTS",value:obj}),
        loadEnrollee:(obj)=>dispatch({type:"LOAD_ENROLLEE",value:obj}),
        loadGlobal:(obj)=>dispatch({type:"LOAD_GLOBAL",value:obj}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainScreen);
