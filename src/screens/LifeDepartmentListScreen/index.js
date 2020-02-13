import React from 'react';
import {View,Text,ScrollView,Image,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import styles from './Style';
import LifeDepartmentView from '../../components/LifeDepartmentView';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

class LifeDepartmentScreen extends React.Component{
    constructor(props){
        super(props);
    }

    sortArrayByDate(elem1,elem2){
        if(elem1.date > elem2.date){
            return 1;
        }
        else if(elem1.date < elem2.date){
            return -1;
        }
        else return 0;
    }

    render(){

        const onPressAdd = () => {
            this.props.navigation.navigate("LifeDepartmentEdit",{editMode:false});
        };

        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.header}>
                        <View style={styles.empty}/>
                        <Text style={styles.h1}>ЖИТТЯ КАФЕДРИ</Text>
                        <TouchableOpacity style={styles.add}
                            onPress={onPressAdd}>
                            <Text style={styles.addText}>ДОДАТИ</Text>
                        </TouchableOpacity>
                    </View>
                    {this.props.departments.sort(this.sortArrayByDate).reverse().map(( currElem,index)=>{

                        const onPressDelete = () => {
                            this.props.deleteDepartment(currElem);
                        };

                        return (
                            <LifeDepartmentView data={currElem}
                                                navigation={this.props.navigation}
                                                key={index}
                                                onPressDelete={onPressDelete}
                            />
                        )
                    })}
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}

function mapStateToProps(state){
    return {
        departments:state.department.arr
    };
}

function mapDispatchToProps(dispatch){
    return {
        deleteDepartment: (obj)=>dispatch({type:"DELETE_DEPARTMENT",value:obj})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LifeDepartmentScreen);
