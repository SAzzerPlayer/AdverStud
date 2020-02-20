import React from 'react';
import {View,TouchableOpacity} from 'react-native';
import styles from './Style';


export default class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isPressedRed:false
        }
    }
    render(){

        const onPressRed = () => {
            if(!this.state.isPressedRed) {
                let text = this.props.text;
                text += "<!>";
                this.setState({isPressedRed:true});
                this.props.onChange(text);
            }
        };

        const onPressBlack = () => {
            if(this.state.isPressedRed){
                let text = this.props.text;
                text+="</!>";
                this.setState({isPressedRed:false});
                this.props.onChange(text);
            }

        };

        return (
            <View style={styles.view}>
                <TouchableOpacity style={[styles.black,{backgroundColor:(!this.state.isPressedRed&&"white")||'black'}]} onPress={onPressBlack}/>
                <TouchableOpacity style={[styles.red,{backgroundColor:(this.state.isPressedRed&&"white")||'red'}]} onPress={onPressRed}/>
            </View>
        )
    }
}
