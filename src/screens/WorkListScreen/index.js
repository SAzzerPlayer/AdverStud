import React from 'react';
import {View,ScrollView,Text,TouchableOpacity} from 'react-native';
import styles from './Style';
import {connect} from 'react-redux';
import WorkView from '../../components/OpportunityView';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

class WorkListScreen extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        const onPressAdd = () => {
            this.props.navigation.navigate("WorkEdit",{editMode:false});
        };

        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView>
                    <View style={styles.header}>
                        <View style={styles.empty}/>
                        <Text style={styles.h1}>РОБОТА</Text>
                        <TouchableOpacity style={styles.add}
                            onPress={onPressAdd}>
                            <Text style={styles.addText}>ДОДАТИ</Text>
                        </TouchableOpacity>
                    </View>
                    {this.props.works.map((currElem)=>{
                        const onPressDelete = () => {
                            this.props.deleteWork(currElem);
                            this.props.navigation.popToTop();
                        };
                        return (
                            <WorkView
                                data={currElem}
                                navigation={this.props.navigation}
                                onPressDelete={onPressDelete}
                                isWork
                            />
                        );
                    })}
                    {this.props.works.length===0 && <Text style={styles.h2}>Нажаль, дані відсутні</Text>}
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}

function mapStateToProps(state){
    return {
        works: state.work.arr
    };
}

function mapDispatchToProps(dispatch){
    return {
        deleteWork:(obj)=>dispatch({type:"DELETE_WORK",value:obj})
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkListScreen);
