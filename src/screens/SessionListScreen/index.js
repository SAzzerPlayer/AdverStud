import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import ListItem from '../../components/RecordListItem';
import styles from './Style';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

export default class extends React.Component{
    constructor(props){
        super(props);

    }
    render(){

        const onPressItem = () => {
            this.props.navigation.navigate("TeacherInfo");
        };

        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={[styles.h1,{marginTop:90}]}>СЕСІЯ</Text>
                    <ListItem text={"День самостійної підготовки"}
                        onPress={onPressItem}
                    />
                    <ListItem text={"День самостійної підготовки"}
                        onPress={onPressItem}
                    />
                    <ListItem text={"День самостійної підготовки"}
                        onPress={onPressItem}
                    />
                    <ListItem text={"День самостійної підготовки"}
                        onPress={onPressItem}
                    />
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }

}
