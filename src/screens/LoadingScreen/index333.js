import React from 'react';
import {View,Image,Text,Animated} from 'react-native';
import {connect} from 'react-redux';
import Firebase from 'firebase';
import RNFS from 'react-native-fs';
import styles from './Style'


const config = {
    apiKey: 'AIzaSyCN-82LRe04UT_2dLclQEVokxJnGZcVEQM',
    authDomain: '549354595412-54ubaukb029poppioa9pmtbsuekj5ndj.apps.googleusercontent.com',
    databaseURL: 'https://adverstud.firebaseio.com',
    projectId: 'adverstud',
    storageBucket: 'adverstud.appspot.com',
    messagingSenderId: 'adverstud'
};

function saveDataFile(data){
    RNFS.writeFile(RNFS.DocumentDirectoryPath+"/snapshot.json",JSON.stringify(data))
        .then((result)=>{
            console.log("Saving file is successfull!");
        })
        .catch((err)=>{
            console.log(err);
        })
}

async function loadDataFile(){
    let file = await RNFS.readFile(RNFS.DocumentDirectoryPath+"/snapshot.json")
        .catch((err)=>{
            console.log(err);
            return null;
        });
    if(file === null){
        return null;
    }
    else return JSON.parse(file);
}

class LoadingScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            viewOpacity:new Animated.Value(1)
        }
    }

    async ReceiveFirebaseData(database){
        let itemRef = database.ref("/");
        itemRef.once("value", snapshot => {
            let data = snapshot.val();
            console.log("launching");
            saveDataFile(data);

            if(data.teachers) this.props.loadTeachers(data.teachers.arr);
            if(data.schedule) this.props.loadSchedule(data.schedule);
            if(data.homework) this.props.loadHomeworks(data.homework);
            if(data.departments) this.props.loadDepartments(data.departments);
            if(data.opportunities) this.props.loadOpportunities(data.opportunities);
            if(data.global) this.props.loadGlobal(data.global);
            if(data.works) this.props.loadWorks(data.works);
            if(data.enrollee) this.props.loadEnrollee(data.enrollee);
            Animated.timing(
                this.state.viewOpacity,
                {
                    duration:600,
                    toValue:0
                }
            ).start();
            setTimeout(()=>{this.props.navigation.navigate("Menu")},1000);
        },this.InternetNotConnectedHandler);
    }

    async InternetNotConnectedHandler(){

        let cacheData = await loadDataFile();
        if(cacheData === null){
            Animated.timing(
                this.state.viewOpacity,
                {
                    duration: 600,
                    toValue: 0
                }
            ).start();
            setTimeout(() => {
                this.props.navigation.navigate("NotFound")
            }, 1000);
        }
        else {
            if (cacheData.teachers) this.props.loadTeachers(cacheData.teachers.arr);
            if (cacheData.schedule) this.props.loadSchedule(cacheData.schedule);
            if (cacheData.homework) this.props.loadHomeworks(cacheData.homework);
            if (cacheData.departments) this.props.loadDepartments(cacheData.departments);
            if (cacheData.opportunities) this.props.loadOpportunities(cacheData.opportunities);
            if (cacheData.global) this.props.loadGlobal(cacheData.global);
            if (cacheData.works) this.props.loadWorks(cacheData.works);
            if (cacheData.enrollee) this.props.loadEnrollee(cacheData.enrollee);

            Animated.timing(
                this.state.viewOpacity,
                {
                    duration: 600,
                    toValue: 0
                }
            ).start();
            setTimeout(() => {
                this.props.navigation.navigate("Menu")
            }, 1000);
        }
    }

    async TryConnect(){
        return await fetch("https://google.com")
            .then((res)=>{return true;})
            .catch((err)=>{return false})
    }

    async LoadLastData(){
        let database = null;
        if(Firebase.apps.length === 0) {
            let app = Firebase.initializeApp(config);
            database = app.database();
        }
        else database = Firebase.database();

        let cacheData = await loadDataFile();

        if(cacheData === null){
            if(await this.TryConnect()) {
                this.ReceiveFirebaseData(database);
            }
            else {
                this.props.navigation.navigate("NotFound");
            }
        }
        else{
            console.log(await this.TryConnect());
            if(await this.TryConnect()) {
                let itemRef = database.ref("/snapshotAtDate");
                itemRef.once("value", snapshot => {
                    let data = snapshot.val();
                    console.log("LAUNCH DATA ", data);
                    console.log("SNAPSHOT DATE ", cacheData.global.snapshotAtDate);
                    if (new Date(data) > new Date(cacheData.snapshotAtDate)) {
                        this.ReceiveFirebaseData(database);
                    } else {

                        if (cacheData.teachers) this.props.loadTeachers(cacheData.teachers.arr);
                        if (cacheData.schedule) this.props.loadSchedule(cacheData.schedule);
                        if (cacheData.homework) this.props.loadHomeworks(cacheData.homework);
                        if (cacheData.departments) this.props.loadDepartments(cacheData.departments);
                        if (cacheData.opportunities) this.props.loadOpportunities(cacheData.opportunities);
                        if (cacheData.global) this.props.loadGlobal(cacheData.global);
                        if (cacheData.works) this.props.loadWorks(cacheData.works);
                        if (cacheData.enrollee) this.props.loadEnrollee(cacheData.enrollee);

                        Animated.timing(
                            this.state.viewOpacity,
                            {
                                duration: 600,
                                toValue: 0
                            }
                        ).start();
                        setTimeout(() => {
                            this.props.navigation.navigate("Menu")
                        }, 1000);
                    }
                }, this.InternetNotConnectedHandler);
            }
            else this.InternetNotConnectedHandler();
        }
    }

    async LoadConfig(){
        let config = await RNFS.readFile(RNFS.DocumentDirectoryPath+"/config.json")
            .catch((err)=>null);
        if(config !== null){
            config = JSON.parse(config);
            this.props.hideHint(config.hide_prompts);
        }
    }


    async componentDidMount() {
        this.LoadLastData();
        this.LoadConfig();
    }
    render() {
        return (
            <Animated.View style={[styles.screen,{opacity:this.state.viewOpacity}]}>
                <Text style={styles.h1}>Котику, почекай трошки</Text>
                <Text style={styles.h2}>Твій додаток завантажується...</Text>
                <Image style={[styles.image]} source={require("../../assets/images/catKing.png")}/>
            </Animated.View>
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
        changeStudyBeginDate:(obj)=>dispatch({type:"CHANGE_STUDY_DATE_BEGIN",value:obj}),
        hideHint:()=>dispatch({type:"HIDE"})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoadingScreen);

