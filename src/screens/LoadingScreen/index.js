import React from 'react';
import {View,Image,Text} from 'react-native';
import {connect} from 'react-redux';
import styles from './Style'
class LoadingScreen extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        /*Loading data from the database*/
        setTimeout(()=>{this.props.navigation.navigate("Menu")},1000);
    }
    render() {
        return (
            <View style={styles.screen}>
                <Text style={styles.h1}>Котику, почекай трошки</Text>
                <Text style={styles.h2}>Твій додаток завантажується...</Text>
                <Image style={styles.image} source={require("../../assets/images/catKing.png")}/>
            </View>
        );
    }
}


function mapStateToProps(state){
    console.log(state);
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch){
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoadingScreen);

