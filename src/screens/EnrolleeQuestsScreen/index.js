import React from 'react';
import {Alert, View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {connect} from "react-redux";
import QuestView from '../../components/QuestView';
import styles from './Style';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

class EnrolleeQuestsScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            quests:this.props.quests||[]
        }
    }
    render(){

        const onPressAdd = () => {
            this.props.navigation.navigate("EnrolleeQuestEdit",{editMode:false})
        };

        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
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

                            const onPressDelete = () => {
                                Alert.alert("Підтвердження","Ви впевнені, що хочете видалити запис?",
                                [
                                    {text:"Ні",onPress:()=>{}},
                                    {text:"Так",onPress:()=>{
                                            this.props.deleteQuest(currElem);
                                            this.setState({quests:this.props.quests});
                                        }}
                                    ]
                                );
                            };

                            const onPressNavigate = () => {
                                this.props.navigation.navigate("EnrolleeQuestsDescription",{data:currElem})
                            };

                            return (
                                <QuestView
                                    adminMode={this.props.adminMode}
                                    navigation = {this.props.navigation}
                                    data = {currElem}
                                    onPressDelete = {onPressDelete}
                                    onPressNavigate={onPressNavigate}
                                />
                                )
                        })
                    }
                    {this.state.quests.length === 0 && <Text style={styles.h2}>Нажаль, дані відсутні</Text>}
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}

function mapStateToProps(state){
    return {
        quests: state.enrollee.quests,
        adminMode:state.global.adminMode
    }
}

function mapDispatchToProps(dispatch){
    return {
        deleteQuest: (obj) => dispatch({type:"DELETE_QUEST",value:obj})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EnrolleeQuestsScreen);
