import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import styles from './Style';
import OpportunityView from '../../components/OpportunityView';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

export default class extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const data={
            title:"Грант на поїздку до бабусі",
            items:[
                "Бути голодним",
                "Бути худим",
                "Не бути сином/дочкою маміной падругі",
                "Любити бабусю"
            ]
        };
        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView style={styles.scroll}>
                    <Text style={styles.h1}>МОЖЛИВОСТІ</Text>
                    <OpportunityView title={data.title} items={data.items}/>
                    <OpportunityView title={data.title} items={data.items}/>
                    <OpportunityView title={data.title} items={data.items}/>
                    <OpportunityView title={data.title} items={data.items}/>
                    <OpportunityView title={data.title} items={data.items}/>
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}
