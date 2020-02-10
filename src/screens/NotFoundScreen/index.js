import React from 'react';
import {View,Text,Image} from 'react-native';
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
                <Text style={styles.h1}>Ця сторінка поки ще тримається в таємниці...</Text>
                <Image style={styles.image} source={require("../../assets/images/dogKing.png")}/>
                <Text style={styles.h1}>Свайпай назад...</Text>
            </View>
            </HOCSwipeBack>
        );
    }
}
