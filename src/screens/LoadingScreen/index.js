import React from 'react';
import {View,Image,Text} from 'react-native';
import {connect} from 'react-redux';
import Firebase from 'firebase';
import styles from './Style'


const config = {
    apiKey: 'AIzaSyCN-82LRe04UT_2dLclQEVokxJnGZcVEQM',
    authDomain: '549354595412-54ubaukb029poppioa9pmtbsuekj5ndj.apps.googleusercontent.com',
    databaseURL: 'https://adverstud.firebaseio.com',
    projectId: 'adverstud',
    storageBucket: 'adverstud.appspot.com',
    messagingSenderId: 'adverstud'
};

class LoadingScreen extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        if(!Firebase.apps.length){
            console.log('connecting');
        }
        //Connecting to the Firebase
        /*let app = Firebase.initializeApp(config);
        const database = app.database();
        console.log(database);
        database.ref("/items").push({
            name:"test"
        });
        let itemRef = database.ref("/items");
        itemRef.on("value", snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            console.log(items);
        });*/

        /*Loading data from the database*/
        setTimeout(()=>{this.props.navigation.navigate("Menu")},1000);
    }
    render() {
        return (
            <View style={styles.screen}>
                <Text style={styles.h1}>Котику, почекай трошки</Text>
                <Text style={styles.h2}>Твій додаток завантажується...</Text>
                <Image style={styles.image} source={require("../../assets/images/catKing.png")}/>
            </View>
        );
    }
}


function mapStateToProps(state){
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch){
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoadingScreen);

