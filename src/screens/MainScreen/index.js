import React from 'react';
import {View,ScrollView,TouchableOpacity} from 'react-native';
import styles from './Style';
import Button from '../../components/AttentionButton';
import TextField from '../../components/SearchField';
import GestureSecretSwipe from '../../hoc/GestureSecretSwipe';

export default class extends React.Component{
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
                        <Button title={"Admin panel".toUpperCase()} onPress={()=>{this.onPressNavigateTo("Admin")}}/>
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
