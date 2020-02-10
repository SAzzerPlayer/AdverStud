import {StyleSheet, Dimensions} from 'react-native';

const {width,height} = Dimensions.get("window");

export default StyleSheet.create({
    screen:{
        width,
        height,
        padding:24,
        paddingTop:0
    },
    h1:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:24
    },
    h2:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom:24
    },
    p:{
        fontSize:14,
        marginBottom:24
    },
    image:{
        width:'100%',
        height:256,
        backgroundColor:'gray',
        borderRadius:32,
        marginBottom:24
    }
});
