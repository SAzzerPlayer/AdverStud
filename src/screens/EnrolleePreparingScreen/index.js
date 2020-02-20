import React from 'react';
import {Alert,View,Text,ScrollView,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import InfoView from '../../components/InfoTextView';
import styles from './Style';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

class EnrolleePreparingScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            prepares: this.props.prepares || []
        }
    }
    render(){

        const onPressAdd = () => {
            this.props.navigation.navigate("EnrolleePreparingEdit",{editMode:false});
        };

        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                    <View style={styles.empty}/>
                    {this.props.adminMode && <TouchableOpacity style={styles.add} onPress={onPressAdd}>
                        <Text style={styles.addText}>ДОДАТИ</Text>
                    </TouchableOpacity>}
                    {this.state.prepares.map((currElem)=>{
                        const onPressDelete = () => {
                              Alert.alert("Підтвердження","Ви впевнені, що хочете видалити цей запис?",
                              [
                                  {text:"Ні",onPress:()=>{}},
                                  {text:"Так",onPress:()=>{
                                      this.props.deletePrepare(currElem);
                                      this.setState({prepares:this.props.prepares});
                                      }}
                              ]
                              )
                        };

                        return (
                            <InfoView
                                adminMode={this.props.adminMode}
                                navigation={this.props.navigation}
                                data = {currElem}
                                onPressDelete = {onPressDelete}
                            />
                        )
                    })}
                    {this.state.prepares.length === 0 && <Text style={styles.h2}>Нажаль, дані відсутні</Text>}
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}

function mapStateToProps(state){
    return {
        adminMode: state.global.adminMode,
        prepares: state.enrollee.prepareZNO
    }
}

function mapDispatchToProps(dispatch){
    return {
        deletePrepare: (obj) => {dispatch({type:"DELETE_PREPARE_ZNO",value: obj})},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EnrolleePreparingScreen);
