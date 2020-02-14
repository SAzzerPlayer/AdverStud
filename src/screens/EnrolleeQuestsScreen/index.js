import React from 'react';
import {View,Text,ScrollView, TouchableOpacity, Image} from 'react-native';
import {connect} from "react-redux";
import QuestView from '../../components/QuestView';
import styles from './Style';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

class EnrolleeQuestsScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            quests:[]
        }
    }
    render(){
        const onPressNavigate = () => {
            this.props.navigation.navigate("EnrolleeQuestsDescription")
        };

        const onPressAdd = () => {
            this.props.navigation.navigate("EnrolleeQuestEdit",{editMode:false})
        };

        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView style={styles.scroll}>
                    <View style={styles.header}>
                        <View style={styles.empty}/>
                        <Text style={styles.h1}>КВЕСТИ</Text>
                        {this.props.adminMode && <TouchableOpacity style={styles.add} onPress={onPressAdd}>
                            <Text style={styles.addText}>ДОДАТИ</Text>
                        </TouchableOpacity>}
                        {!this.props.adminMode && <View style={styles.empty}/>}
                    </View>
                    {
                        this.state.quests.map((currElem)=>{

                        })
                    }
                    <QuestView
                        onPress={onPressNavigate}
                        adminMode={this.props.adminMode}
                    />
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}

function mapStateToProps(state){
    return {
        adminMode:state.global.adminMode
    }
}

function mapDispatchToProps(dispatch){
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EnrolleeQuestsScreen);
