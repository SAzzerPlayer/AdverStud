import React from 'react';
import {Animated, View,Text,Image,TouchableOpacity,Dimensions} from 'react-native';
import {FlingGestureHandler,Directions,State} from 'react-native-gesture-handler';
import styles from './Style';

const {width, height} = Dimensions.get("window");

export default class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            opacity: new Animated.Value(0),
            zIndex: new Animated.Value(5),
            left: new Animated.Value(0),
            opacityRound: new Animated.Value(1)
        };
        this.startX = 0;
        this.roundState = 0; // 0,1,2,3
    }
    changeStateOfRound = () => {

        if(this.roundState === 0){
            Animated.timing(
                this.state.left,
                {
                    toValue:width/2,
                    duration:2000
                }
            ).start();
            setTimeout(()=>{
                this.roundState = 1;
                this.changeStateOfRound.bind(this);
                this.changeStateOfRound();
            },2200);
        }
        if(this.roundState === 1){
            Animated.timing(
                this.state.opacityRound,
                {
                    toValue:0,
                    duration:300
                }
            ).start();
            Animated.timing(
                this.state.left,
                {
                    toValue: 0,
                    duration:50,
                    delay: 300
                }
            ).start();
            setTimeout(()=>{
                this.roundState = 2;
                this.changeStateOfRound.bind(this);
                this.changeStateOfRound();
            },500)
        }
        if(this.roundState === 2) {
            Animated.timing(
                this.state.opacityRound,
                {
                    toValue: 1,
                    duration: 300
                }
            ).start();
            setTimeout(() => {
                this.roundState = 0;
                this.changeStateOfRound.bind(this);
                this.changeStateOfRound();
            }, 500)
        }
    };
    componentDidMount(){
        Animated.timing(
            this.state.opacity,
            {
                toValue: 0.90,
                duration: 400
            }
        ).start();
        /*Animated.timing(
            this.state.left,
            {
                toValue: width/2,
                duration: 3000
            }
        ).start();*/
        this.changeStateOfRound();
    }

    render(){
        const onHandlerStateChange = ({nativeEvent}) => {
            if(nativeEvent.state === State.BEGAN){
                this.startX = nativeEvent.x;
            }
            if(nativeEvent.state === State.ACTIVE){
                if(nativeEvent.x - this.startX > 50) {
                    this.props.onSwipe();
                }
            }
        };

        const hideView = () => {
            Animated.timing(
                this.state.opacity,
                {
                    toValue: 0,
                    duration: 300
                }
            ).start();
            Animated.timing(
                this.state.zIndex,
                {
                    toValue: -5,
                    duration: 500
                }
            ).start();
        };

        const helpText = "ЩОБ ПОВЕРНУТИСЯ НАЗАД, ЗРОБИ СВАЙП, ЯК ЦЕ ПОКАЗАНО НА ЕКРАНІ";

        return(
            <FlingGestureHandler
                direction={Directions.RIGHT}
                onHandlerStateChange={onHandlerStateChange}
            >
                <View>
                    {this.props.children}
                    <Animated.View
                        style={[styles.screen,{
                            opacity:this.state.opacity,
                            zIndex: this.state.zIndex
                        }]}
                    >
                        <Text style={styles.help}>{helpText}</Text>
                        <View style={styles.gestureView}>
                            <Animated.View style={[styles.round,{
                                left:this.state.left,
                                opacity: this.state.opacityRound
                            }]}>

                            </Animated.View>
                            <Image style={styles.imgArrow} source={require('../assets/images/arrow.png')}/>
                        </View>
                        <View style={styles.buttonsView}>
                            <TouchableOpacity style={styles.buttonDecline}
                                onPress={hideView}
                            >
                                <Text style={styles.buttonText}>БІЛЬШЕ НЕ ПОКАЗУВАТИ</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonAccept}
                                onPress={hideView}
                            >
                                <Text style={styles.buttonText}>ПРОПУСТИТИ</Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>
                </View>
            </FlingGestureHandler>
        );
    }
}
