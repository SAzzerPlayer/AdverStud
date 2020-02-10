import React from 'react';
import {View,Text,ScrollView,Image} from 'react-native';
import styles from './Style';
import LifeDepartmentView from '../../components/LifeDepartmentView';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

export default class extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const onPressRead = (params) => {
            this.props.navigation.navigate("LifeDepartmentDescription");
        };
        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.h1}>ЖИТТЯ КАФЕДРИ</Text>
                    <LifeDepartmentView onPress={onPressRead}/>
                    <LifeDepartmentView onPress={onPressRead}/>
                    <LifeDepartmentView onPress={onPressRead}/>
                    <LifeDepartmentView onPress={onPressRead}/>
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}
