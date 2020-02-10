import {StyleSheet,Dimensions} from 'react-native';

const {width,height} = Dimensions.get("window");

export default StyleSheet.create({
    screen:{
        width,
        height,
        padding:24
    },
    secretButton:{
        position: 'absolute',
        left:5,
        top:5,
        width:24,
        height:100
    }
})
