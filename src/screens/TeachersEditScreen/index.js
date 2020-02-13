import React from 'react';
import {Alert,View,Text,TextInput,Image,TouchableOpacity,ScrollView} from 'react-native';
import RNFS from 'react-native-fs';
import ImagePicker from 'react-native-image-crop-picker';
import Button from '../../components/AttentionButton';
import HOCBackSwipe from '../../hoc/GestureRightSwipe';
import {generateKey} from '../../libs/methods';
import {connect} from 'react-redux';
import styles from './Style';

class TeachersEditScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id:generateKey(64),
            surname: '',
            firstname: '',
            middlename: '',
            image: require('../../assets/images/noname.png'),
            telegram: '',
            viber: '',
            email: ''
        };
    }

    componentDidMount(){
        if(this.props.navigation.getParam("editMode")){
            this.setState({
                ...this.props.navigation.getParam("data")
            })
        }
    }

    render(){

        const onChangeText = ({nativeEvent},fieldName) => {
            const value = nativeEvent.text;
            const state = this.state;
            state[fieldName] = value;
            this.setState({...state});
        };

        const ValidateEmail = (field) => {
            const regExpEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
            if(field.length > 0 && regExpEmail.test(field)){
                return true;
            }
            return false;
        };

        const ValidateNumber = (field) => {
            const regExpNumber = /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
            if(field.length === 17 && regExpNumber.test(field)){
                return true;
            }
            return false;
        };

        const ValidateName = (field) => {
            const dangerSymbols = "1234567890!@#$%^&*()\"";
            let isCorrect = true;
            for(let i = 0; i<field.length;i++){
                if(dangerSymbols.includes(field[i])){
                    isCorrect = false;
                    break;
                }
            }
            if(field.length > 0 && isCorrect){
                return true;
            }
            return false;
        };

        const onPressPublish = () => {
            const validFirstname = ValidateName(this.state.firstname);
            const validSurname = ValidateName(this.state.surname);
            const validMiddlename = ValidateName(this.state.middlename);
            const validTelegram = ValidateNumber(this.state.telegram);
            const validViber = ValidateNumber(this.state.viber);
            const validEmail = ValidateEmail(this.state.email);

            if(validFirstname && validSurname && validMiddlename &&
            validTelegram && validViber && validEmail){
                console.log(this.props.navigation.getParam("editMode"));
                if(this.props.navigation.getParam('editMode')){
                    console.log('changing');
                    this.props.changeTeacher(this.state);
                }
                else {
                    console.log("creating");
                    this.props.addTeacher(this.state);
                }
                this.props.navigation.popToTop();
                setTimeout(()=>{this.props.navigation.navigate("Menu")},100);
            }
            else{
                let message = "Невірно заповнені наступні поля:\n";
                if(!validFirstname) message += "Ім'я\n";
                if(!validSurname) message += "Призвіще\n";
                if(!validMiddlename) message += "По-батькові\n";
                if(!validTelegram) message += "Telegram\n";
                if(!validViber) message += "Viber\n";
                if(!validEmail) message += "Email\n";

                Alert.alert("Помилка!",message);
            }

        };

        const onPressPicker = () => {
            ImagePicker.openPicker({
                width: 400,
                height: 400,
                cropping: true
            })
                .then(async image => {
                    //Getting coded text of the image
                    let file = await RNFS.readFile(image.path , 'base64');
                    //Making it available for showing
                    let code = 'data:image/jpeg;base64,' + file;
                    //Saving state
                    this.setState({image:{uri:code}});
                })
                .catch(err=>{this.setState({image:require("../../assets/images/noname.png")})})
        };

        return(
            <HOCBackSwipe onSwipe={this.props.navigation.pop}>
            <View style={styles.screen}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.h1}>РЕДАГУВАННЯ</Text>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>ПРІЗВИЩЕ</Text>
                        <TextInput style={styles.input}
                                   editable
                                   keyboardType={'default'}
                                   value={this.state.surname}
                                   onChange={(event)=>{
                                       onChangeText(event,"surname")
                                   }}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>ІМ'Я</Text>
                        <TextInput style={styles.input}
                                   editable
                                   keyboardType={'default'}
                                   value={this.state.firstname}
                                   onChange={(event)=>{
                                       onChangeText(event,"firstname")
                                   }}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>ПО-БАТЬКОВІ</Text>
                        <TextInput style={styles.input}
                                   editable
                                   keyboardType={'default'}
                                   value={this.state.middlename}
                                   onChange={(event)=>{
                                       onChangeText(event,"middlename");
                                   }}
                        />
                    </View>
                    <View style={styles.pickerView}>
                        <TouchableOpacity onPress={onPressPicker}>
                            <Image style={styles.photo} source={require('../../assets/images/photo.png')}/>
                        </TouchableOpacity>
                        <Image style={styles.photo} source={this.state.image}/>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>НОМЕР TELEGRAM</Text>
                        <TextInput style={styles.input}
                                   editable
                                   keyboardType={'phone-pad'}
                                   placeholder={"+38(044)555-55-55"}
                                   value={this.state.telegram}
                                   maxLength={17}
                                   onChange={(event)=>{
                                       onChangeText(event,"telegram");
                                   }}

                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>НОМЕР VIBER</Text>
                        <TextInput style={styles.input}
                                   editable
                                   keyboardType={'phone-pad'}
                                   placeholder={"+38(044)555-55-55"}
                                   value={this.state.viber}
                                   maxLength={17}
                                   onChange={(event)=>{
                                       onChangeText(event,"viber");
                                   }}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.h2}>EMAIL</Text>
                        <TextInput style={styles.input}
                                   editable
                                   keyboardType={'email-address'}
                                   placeholder={"email@site.com"}
                                   value={this.state.email}
                                   onChange={(event) => {
                                       onChangeText(event,"email")
                                   }}
                        />
                    </View>
                    <Button title={"ОПУБЛІКУВАТИ"} onPress={onPressPublish}/>
                    <View style={styles.empty}/>
                </ScrollView>
            </View>
            </HOCBackSwipe>
        );
    }
}

function mapStateToProps(state){
    return {

    }
}
function mapDispatchToProps(dispatch){
    return {
        addTeacher : (obj) => dispatch({type:"ADD_TEACHER",value:obj}),
        changeTeacher: (obj) => dispatch({type:"CHANGE_TEACHER",value:obj})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TeachersEditScreen);

