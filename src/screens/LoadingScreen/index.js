import React from 'react';
import {Animated, Image, Text} from 'react-native';
import RNFS from 'react-native-fs';
import {connect} from 'react-redux';
import Firebase from 'firebase';
import styles from './Style';

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
        this.state = {
            opacity : new Animated.Value(1)
        }
    }

    async loadCacheData(){
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

    async saveCacheData(data){
        RNFS.writeFile(RNFS.DocumentDirectoryPath+"/snapshot.json",JSON.stringify(data))
            .then((result)=>{
                console.log("Saving file is successfull!");
            })
            .catch((err)=>{
                console.log(err);
        })
    }

    async receiveNewData(database){
        let itemRef = database.ref("/");
        return await itemRef.once("value", snapshot => {
            let data = snapshot.val();
            console.log("launching");
            return data;
        });
    }

    changeAppData(data){
        console.log(1);
        if(data.teachers) this.props.loadTeachers(data.teachers.arr);
        console.log(2);
        if(data.schedule) this.props.loadSchedule(data.schedule);
        console.log(3);
        if(data.homework) this.props.loadHomeworks(data.homework);
        console.log(4);
        if(data.departments) this.props.loadDepartments(data.departments);
        console.log(5);
        if(data.opportunities) this.props.loadOpportunities(data.opportunities);
        console.log(6);
        if(data.global) this.props.loadGlobal(data.global);
        console.log(7);
        if(data.works) this.props.loadWorks(data.works);
        console.log(8);
        if(data.enrollee) this.props.loadEnrollee(data.enrollee);
        console.log(9);
    }

    async checkInternetConnection (){
        return await fetch("https://google.com")
            .then((res)=>{return true;})
            .catch((err)=>{return false})
    }

    navigateToNotFound(){
        Animated.timing(
            this.state.opacity,
            {
                duration: 600,
                toValue: 0
            }
        ).start();
        setTimeout(() => {
            this.props.navigation.navigate("NotFound")
        }, 1000);
    }

    navigateToMainScreen(){
        Animated.timing(
            this.state.opacity,
            {
                duration: 600,
                toValue: 0
            }
        ).start();
        setTimeout(() => {
            this.props.navigation.navigate("Main")
        }, 1000);
    }

    async initializeApplication(database, cacheData){
        if(await this.checkInternetConnection()){
            console.log("internet");
            if(cacheData !== null){
                let itemRef = database.ref("/snapshotAtDate");
                itemRef.once("value", async snapshot => {
                    let data = snapshot.val();
                    console.log("SNAPSHOT DATE ", cacheData.global.snapshotAtDate);
                    if (new Date(data) > new Date(cacheData.snapshotAtDate)) {
                        let data = await this.receiveNewData(database);

                        //let cacheData = await this.loadCacheData();
                        //this.changeAppData(cacheData);
                        console.log('new data');
                        await this.saveCacheData(data);
                        let cacheData = await this.loadCacheData();
                        console.log(data);
                        await this.changeAppData(cacheData);
                        this.navigateToMainScreen();
                    }
                    else{
                        let cacheData = await this.loadCacheData();
                        await this.changeAppData(cacheData);
                        this.navigateToMainScreen();
                    }
                });
            }
            else {
                console.log("INTERNET CACHE");
                let data = await this.receiveNewData(database);
                await this.saveCacheData(data);
                let cacheData = await this.loadCacheData();
                await this.changeAppData(cacheData);
                this.navigateToMainScreen();
            }
        }
        else{
            if(cacheData !== null){
                console.log("NO INTERNET CACHE");
                await this.changeAppData(cacheData);
                this.navigateToMainScreen();
            }
            else{
                console.log("NO INTERNET NO CACHE");
                this.navigateToNotFound();
            }
        }
    }

    async loadConfig(){
        let config = await RNFS.readFile(RNFS.DocumentDirectoryPath+"/config.json")
            .catch((err)=>null);
        if(config !== null){
            config = JSON.parse(config);
            this.props.hideHint(config.hide_prompts);
        }
    }

    componentDidMount(){
        this.loadConfig();

        //Initialize firebase database
        let database = null;
        if(Firebase.apps.length === 0) database = Firebase.initializeApp(config).database();
        else database = Firebase.database();

        this.loadCacheData(database)
            .then(result=>{
                this.initializeApplication(database, result);
            });
    }

    render(){
        return (
            <Animated.View style={[styles.screen,{opacity:this.state.opacity}]}>
                <Text style={styles.h1}>Котику, почекай трошки</Text>
                <Text style={styles.h2}>Твій додаток завантажується...</Text>
                <Image style={[styles.image]} source={require("../../assets/images/catKing.png")}/>
            </Animated.View>
        )
    }
}

function mapStateToProps(state){
    return {

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
