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
    async LoadLastData(isInitialize){
        let database = null;
        if(Firebase.apps.length === 0) {
            let app = Firebase.initializeApp(config);
            database = app.database();
        }
        else database = Firebase.database();
        //load teachers
        let itemRef = database.ref("/");
        itemRef.on("value", snapshot => {
            let data = snapshot.val();
            if(data.teachers) this.props.loadTeachers(data.teachers.arr);
            if(data.schedule) this.props.loadSchedule(data.schedule);
            console.log(data.homework);
            if(data.homework) this.props.loadHomeworks(data.homework);
        });
    }
    async LoadCacheData(){

    }
    async componentDidMount(){
        if(!Firebase.apps.length){
            console.log('connecting');
            //await this.LoadLastData();
        }

        setTimeout(()=>{this.props.navigation.navigate("Menu")},1000);
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
        loadTeachers:(obj)=>dispatch({type:"LOAD_TEACHERS",value:obj}),
        loadSchedule:(obj)=>dispatch({type:"LOAD_SCHEDULE",value:obj}),
        loadOpportunities:(obj)=>dispatch({type:"LOAD_OPPORTUNITIES",value:obj}),
        loadWorks:(obj)=>dispatch({type:"LOAD_WORKS",value:obj}),
        loadHomeworks:(obj)=>dispatch({type:"LOAD_HOMEWORKS",value:obj}),
        loadDepartments:(obj)=>dispatch({type:"LOAD_DEPARTMENTS",value:obj}),
        loadEnrollee:(obj)=>dispatch({type:"LOAD_ENROLLEE",value:obj}),
        loadGlobal:(obj)=>dispatch({type:"LOAD_GLOBAL",value:obj}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoadingScreen);

