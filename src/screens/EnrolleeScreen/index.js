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
            link:this.props.link,
            isChangingLink:false,
            title:"ЗМІНИТИ ПОСИЛАННЯ"
        }
    }

    render(){

        const onPressLink = () => {
            let regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
            if(regex.test(this.state.link)) {
                Linking.openURL(this.state.link);
            }
            else this.props.navigation.navigate("NotFound");
        };

        const onPressChangeLink = () => {
            if(!this.state.isChangingLink){
                this.setState({
                    isChangingLink:true,
                    title:"OK"
                });

            }
            else{
                this.setState({
                    isChangingLink:false,
                    title:"ЗМІНИТИ ПОСИЛАННЯ"
                });
                this.props.changeLink(this.state.link);
            }
        };

        return (
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
                <View style={styles.screen}>
                    <Text style={styles.h1}>АБІТУРІЄНТАМ</Text>
                    <Button title={"ПІДГОТОВКА ДО ЗНО"} onPress={()=>{
                        if(this.props.prepares.length === 0 && !this.props.adminMode){
                            this.props.navigation.navigate("NotFound");
                        }
                        else this.props.navigation.navigate("EnrolleePreparing");
                    }}/>
                    <Button title={"КВЕСТИ"} onPress={()=>{
                        if(this.props.quests.length === 0 && !this.props.adminMode){
                            this.props.navigation.navigate("NotFound");
                        }
                        else this.props.navigation.navigate("EnrolleeQuests");
                    }}/>
                    <Button title={"КОНКУРСИ"} onPress={()=>{
                        if(this.props.contests.length === 0 && !this.props.adminMode){
                            this.props.navigation.navigate("NotFound");
                        }
                        else this.props.navigation.navigate("EnrolleeContests");
                    }}/>
                    <Button title={"СТАТИ АБІТУРІЄНТОМ"} onPress={onPressLink}/>
                    {this.props.adminMode && <OutlinedButton title={this.state.title} onPress={onPressChangeLink}/>}
                    {this.props.adminMode && <TextInput
                        editable={this.state.isChangingLink}
                        style={styles.input}
                        value={this.state.link}
                        onChangeText={(text)=>{this.setState({link:text})}}
                        placeholder={"https://..."}
                    />}
                    <View style={styles.empty}/>
                </View>
            </HOCSwipeBack>
        );
    }
}

function mapStateToProps(state){
    return {
        adminMode:state.global.adminMode,
        contests: state.enrollee.contests,
        quests: state.enrollee.quests,
        prepares: state.enrollee.prepareZNO,
        link: state.enrollee.link
    };
}

function mapDispatchToProps(dispatch){
    return {
        changeLink:(link)=>{dispatch({type:"CHANGE_ENROLLEE_LINK",value:link})}
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(EnrolleeScreen);
