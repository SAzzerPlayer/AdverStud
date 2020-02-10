import React from 'react';
import {View,ScrollView,Text} from 'react-native';
import styles from './Style';
import WorkView from '../../components/OpportunityView';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

export default class extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const data={
            title:"Ведучий клубу алкоголіків (ООО 'ФейсПалм')",
            items:[
                "Стаж роботи: як у твого баті",
                "Володіти акторським мистецтвом",
                "Знати, що падік це зло",
                "Вміти казати не 'альо', а добрий вечір",
                "Бути своїм пацанчиком",
                "Вміти відрізнити копійку від двійки"
            ]
        };
        return(
            <HOCSwipeBack onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView>
                    <Text style={styles.h1}>РОБОТА</Text>
                    <WorkView title={data.title} items={data.items}/>
                    <WorkView title={data.title} items={data.items}/>
                    <WorkView title={data.title} items={data.items}/>
                    <WorkView title={data.title} items={data.items}/>
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }
}
