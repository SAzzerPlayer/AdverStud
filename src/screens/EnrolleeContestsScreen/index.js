import React from 'react';
import {Alert,View,Text,ScrollView,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import ContestView from '../../components/ContestView';
import styles from './Style';
import HOCSwipeBack from '../../hoc/GestureRightSwipe';

class EnrolleeContestsScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contests:this.props.contests
        }
    }
    render(){

        const onPressAdd = () => {
            this.props.navigation.navigate("EnrolleeContestsEdit",{editMode:false});
        };

        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.header}>
                        <View style={styles.empty}/>
                        <Text style={styles.h1}>КОНКУРСИ</Text>
                        {this.props.adminMode && <TouchableOpacity style={styles.add} onPress={onPressAdd}>
                            <Text style={styles.addText}>ДОДАТИ</Text>
                        </TouchableOpacity>}
                        {!this.props.adminMode && <View style={styles.empty}/>}
                    </View>
                    {
                        this.state.contests.map((currElem)=>{

                            const onPressDelete = () => {
                                Alert.alert("Підтвердження","Ви впевнені, що хочете видалити цей запис",
                                [
                                    {text:"Ні",onPress:()=>{}},
                                    {text:"Так",onPress:()=>{
                                        this.props.deleteContest(currElem);
                                        }}
                                ]
                                )
                            };

                            const onPressNavigate = () => {
                                this.props.navigation.navigate("EnrolleeContestsDescription",{data:currElem});
                            };

                            return (
                                <ContestView
                                    data={currElem}
                                    navigation={this.props.navigation}
                                    onPressDelete = {onPressDelete}
                                    onPressNavigate = {onPressNavigate}
                                    adminMode={this.props.adminMode}
                                />
                            )
                        })
                    }
                    {this.state.contests.length === 0 && <Text style={styles.h2}>Нажаль, дані відсутні</Text>}
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}

function mapStateToProps(state){
    return {
        adminMode:state.global.adminMode,
        contests:state.enrollee.contests
    }
}

function mapDispatchToProps(dispatch){
    return {
        deleteContest:(obj)=>{dispatch({type:"DELETE_CONTEST",value:obj})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EnrolleeContestsScreen);
