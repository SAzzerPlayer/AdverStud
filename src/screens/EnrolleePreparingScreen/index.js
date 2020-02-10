import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import InfoView from '../../components/InfoTextView';
import styles from './Style';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

export default class extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView style={styles.scroll}>
                    <View style={styles.empty}/>
                    <InfoView/>
                    <InfoView/>
                    <InfoView/>
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}
