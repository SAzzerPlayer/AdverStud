import React from 'react';
import {View,Text,Linking} from 'react-native';
import Button from '../../components/AttentionButton';
import styles from './Style';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

export default class extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        const onPressNavigate = (routeName) => {
            this.props.navigation.navigate(routeName);
        };

        const onPressLink = () => {
            Linking.openURL("https://www.google.com");
        };

        return (
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
                <View style={styles.screen}>
                    <Text style={styles.h1}>АБІТУРІЄНТАМ</Text>
                    <Button title={"ПІДГОТОВКА ДО ЗНО"} onPress={()=>onPressNavigate("EnrolleePreparing")}/>
                    <Button title={"КВЕСТИ"} onPress={()=>onPressNavigate("EnrolleeQuests")}/>
                    <Button title={"КОНКУРСИ"} onPress={()=>onPressNavigate("EnrolleeContests")}/>
                    <Button title={"СТАТИ АБІТУРІЄНТОМ"} onPress={onPressLink}/>
                </View>
            </HOCSwipeBack>
        );
    }
}
