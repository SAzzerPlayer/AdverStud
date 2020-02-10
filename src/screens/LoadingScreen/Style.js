import {StyleSheet,Dimensions} from 'react-native';

const {width,height} = Dimensions.get("window");

export default StyleSheet.create({
    screen:{
        width,
        height,
        justifyContent:"center",
        alignItems:"center"
    },
    image:{

    },
    h1:{
        fontSize:20,
        marginBottom:8
    },
    h2:{
        fontSize:14,
        marginBottom:8
    }
});
