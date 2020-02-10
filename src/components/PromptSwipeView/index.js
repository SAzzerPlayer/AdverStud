import React from 'react';
import {View,Animated,Text,Image} from 'react-native';
import styles from './Style';

export default class extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Animated.View style={styles.screen}>
                <Text>

                </Text>
            </Animated.View>
        );
    }
}
