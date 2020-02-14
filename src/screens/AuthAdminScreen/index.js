import React from 'react';
import {View,Text,TextInput,Alert,ScrollView} from 'react-native';
import {connect} from 'react-redux';
import Button from '../../components/AttentionButton';
import styles from './Style';

import HOCSwipeBack from '../../hoc/GestureRightSwipe';

const globalLogin = "i_love_adver";
const globalPassword = "salambacha2020";

class AuthAdminScreen extends React.Component{
    constructor(props){
        super(props);

        this.state={
            login:"",
            password:"",
            isLogged:false
        };
    }

    render(){

        const onChangeLogin = (obj) => {
            const text = obj.nativeEvent.text;
            this.setState({login:text});
        };

        const onChangePassword = (obj) => {
            const text = obj.nativeEvent.text;
            this.setState({password:text});
        };

        const onPressSubmit = () => {
            const [login,password] = [this.state.login,this.state.password];
            if(login === globalLogin && password === globalPassword){
                this.setState({isLogged:true,message:""});
            }
            else{
                this.setState({message:"Невірний пароль або логін"})
            }
            //Alert.alert("Invalid data","You has entered wrong data! Please, check fields.");
        };

        const onPressConfirm = () => {
            //Смена режима пользователя
            this.props.activateAdminMode();
            this.props.navigation.navigate("Menu");
        };

        if(!this.state.isLogged)
        {
            return (
                <HOCSwipeBack onSwipe={this.props.navigation.pop}>
                <View style={styles.screen}>
                    <Text style={styles.h1}>АДМІНКА</Text>
                    <Text style={styles.h2}>ВХІД</Text>
                    <Text style={[styles.h2,{color:"red"}]}>{this.state.message}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={"Логін"}
                        value={this.state.login}
                        onChange={onChangeLogin}
                        textContentType={"username"}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={"Пароль"}
                        value={this.state.password}
                        onChange={onChangePassword}
                        textContentType={"password"}
                        secureTextEntry={true}
                    />
                    <Button title={'Увійти'.toUpperCase()} onPress={onPressSubmit}/>
                </View>
                </HOCSwipeBack>
            );
        } else {
            const description = "Але тут не буде Нео та тих двох пігулок. Тут є правила, яких треба дотримуватись. " +
                "Інакше твоя сила зникне і ти перестанеш бути адміном. Ось так ось. Так що читай уважно:";
            const rules = [
                "1. Пиши грамотно.",
                "2. Все писати коротко і зрозуміло. Ти повинен пам'ятити про правило \"25 секунд\".",
                "3. Пиши тільки актуальну інфу.",
                "4. Перевіряй інфу перед написанням. За фейк - ",
                "5. У випадку будь-яких проблем, повідомляй у деканаті.",
                "6. Віднесись з повагою до своїх колег: за розжигання ненависті і " +
                "публікацію провокативних матеріалів будеш відповідати перед деканатом."
            ];
            const rulesJSX = rules.map((currentElem,index)=>{
                return <Text key = {index} style={[styles.p,{textAlign:'left'}]}>
                    {rules[index]}
                    {index===3 && <Text style={{color:'red'}}>мінус 5 балів</Text>}
                </Text>;
            });
            return(
                <View style={styles.screen}>
                    <ScrollView>
                        <Text style={styles.h1}>ВІТАЮ!</Text>
                        <Text style={styles.h2}>Ти обраний!</Text>
                        <Text style={styles.p}>{description}</Text>
                        {rulesJSX}
                        <Text style={[styles.h1,{color:"red",marginTop:90}]}>ПРОДОВЖИМО?</Text>
                        <Button title={"Так!".toUpperCase()} onPress={onPressConfirm}/>
                    </ScrollView>
                </View>
            )
        }
    }
}

function mapStateToProps(state){
    return {
        adminMode:state.global.adminMode
    }
}

function mapDispatchToProps(dispatch){
    return{
        activateAdminMode:()=>{dispatch({type:"ACTIVATE_ADMIN_MODE"})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthAdminScreen);
