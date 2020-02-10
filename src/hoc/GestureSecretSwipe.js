import React from 'react';
import {View} from 'react-native';
import {FlingGestureHandler,Directions,State,RotationGestureHandler} from 'react-native-gesture-handler';

export default class extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        const onHandlerStateChange = ({nativeEvent}) => {
            const taps = this.props.tapCounter;
            if(taps>2){
                if(nativeEvent.rotation > 2.5){
                    this.props.navigation.navigate("Admin");
                }
            }
        };
        return (
            <RotationGestureHandler
                onHandlerStateChange={onHandlerStateChange}
            >
                <View>
                    {this.props.children}
                </View>
            </RotationGestureHandler>
        );
    }
}
