import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import {Picker} from '@react-native-community/picker';
import TaskView from '../../components/TaskView';
import styles from './Style';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

export default class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            week:this.props.navigation.getParam("week"),
            groups: ['ПЗ-17-1','ПЗ-17-2','ПЗ-18у-1'],
            pickerValue: 'ПЗ-17-1'
        }
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

        const onPressNavigate = () => {
            this.props.navigation.navigate("TaskDeadlineDescription");
        };

        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={[styles.h1,{marginTop:90}]}>ДЕДЛАЙНИ</Text>
                    <View style={styles.groupView}>
                        <View style={styles.empty}/>
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
                    <TaskView onPress={onPressNavigate}/>
                    <TaskView onPress={onPressNavigate}/>
                    <TaskView onPress={onPressNavigate}/>
                    <TaskView onPress={onPressNavigate}/>
                    <TaskView onPress={onPressNavigate}/>
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}
