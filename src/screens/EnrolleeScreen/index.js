import React from 'react';
import {View, Text, Linking, TextInput} from 'react-native';
import {connect} from 'react-redux';
import Button from '../../components/AttentionButton';
import OutlinedButton from '../../components/OutlinedAttentionButton';
import styles from './Style';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

class EnrolleeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            link:"https://google.com",
            isChangingLink:false,
            title:"ЗМІНИТИ ПОСИЛАННЯ"
        }
    }

    render(){
        const onPressNavigate = (routeName) => {
            this.props.navigation.navigate(routeName);
        };

        const onPressLink = () => {
            Linking.openURL(this.state.link);
        };

        const onPressChangeLink = () => {
            if(!this.state.isChangingLink){
                this.setState({
                    isChangingLink:true,
                    title:"OK"
                });
                this.props.changeLink(this.state.link);
            }
            else{
                this.setState({
                    isChangingLink:false,
                    title:"ЗМІНИТИ ПОСИЛАННЯ"
                })
            }
        };

        return (
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
                <View style={styles.screen}>
                    <Text style={styles.h1}>АБІТУРІЄНТАМ</Text>
                    <Button title={"ПІДГОТОВКА ДО ЗНО"} onPress={()=>onPressNavigate("EnrolleePreparing")}/>
                    <Button title={"КВЕСТИ"} onPress={()=>onPressNavigate("EnrolleeQuests")}/>
                    <Button title={"КОНКУРСИ"} onPress={()=>onPressNavigate("EnrolleeContests")}/>
                    <Button title={"СТАТИ АБІТУРІЄНТОМ"} onPress={onPressLink}/>
                    {this.props.adminMode && <OutlinedButton title={this.state.title} onPress={onPressChangeLink}/>}
                    {this.props.adminMode && <TextInput
                        editable={this.state.isChangingLink}
                        style={styles.input}
                        value={this.state.link}
                        onChangeText={(text)=>{this.setState({link:text})}}
                        placeholder={"Назва групи"}
                    />}
                </View>
            </HOCSwipeBack>
        );
    }
}

function mapStateToProps(state){
    return {
        adminMode:state.global.adminMode
    };
}

function mapDispatchToProps(dispatch){
    return {
        changeLink:(link)=>{dispatch({type:"CHANGE_BECOMING_LINK",value:link})}
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(EnrolleeScreen);
