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
                    <Text style={[styles.h1,{marginTop:90}]}>Відпрацювання</Text>
                    <Text style={[styles.h2,styles.active]}>СІЧЕНЬ</Text>
                    <ListItem
                        text={'10.02.2020 HR-Qualities 9:30 - 10:50'}
                        onPress={onPressItem}
                    />
                    <Text style={[styles.h2]}>ЛЮТИЙ</Text>
                    <ListItem
                        text={'10.02.2020 HR-Qualities 9:30 - 10:50'}
                        onPress={onPressItem}
                    />
                    <Text style={[styles.h2]}>БЕРЕЗЕНЬ</Text>
                    <ListItem
                        text={'10.02.2020 HR-Qualities \n9:30 - 10:50'}
                        onPress={onPressItem}
                    />
                    <ListItem
                        text={'10.02.2020 HR-Qualities \n11:10 - 12:30'}

                    />
                    <ListItem
                        text={'10.02.2020 HR-Qualities \n12:40 - 14:00'}
                    />
                    <ListItem
                        text={'10.02.2020 HR-Qualities \n14:10 - 15:30'}
                    />
                    <Text style={[styles.h2]}>КВІТЕНЬ</Text>
                    <ListItem
                        text={'10.02.2020 HR-Qualities 9:30 - 10:50'}
                    />
                    <Text style={[styles.h2]}>ТРАВЕНЬ</Text>
                    <ListItem
                        text={'10.02.2020 HR-Qualities 9:30 - 10:50'}
                    />
                    <Text style={[styles.h2]}>ЧЕРВЕНЬ</Text>
                    <ListItem
                        text={'10.02.2020 HR-Qualities 9:30 - 10:50'}
                    />
                    <Text style={[styles.h2]}>ЛИПЕНЬ</Text>
                    <ListItem
                        text={'10.02.2020 HR-Qualities 9:30 - 10:50'}
                    />
                    <Text style={[styles.h2]}>СЕРПЕНЬ</Text>
                    <ListItem
                        text={'10.02.2020 HR-Qualities 9:30 - 10:50'}
                    />
                    <Text style={[styles.h2]}>ВЕРЕСЕНЬ</Text>
                    <ListItem
                        text={'10.02.2020 HR-Qualities 9:30 - 10:50'}
                    />
                    <Text style={[styles.h2]}>ЖОВТЕНЬ</Text>
                    <ListItem
                        text={'10.02.2020 HR-Qualities 9:30 - 10:50'}
                    />
                    <Text style={[styles.h2]}>ЛИСТОПАД</Text>
                    <ListItem
                        text={'10.02.2020 HR-Qualities 9:30 - 10:50'}
                    />
                </ScrollView>
            </View>
            </HOCSwipeBack>
        );
    }

}
