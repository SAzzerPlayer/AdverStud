import {StyleSheet,Dimensions} from 'react-native';

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
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop:90,
        marginBottom:24
    },
    h2:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom:8
    },
    inputView:{
        flexDirection: 'column',
        marginBottom:24
    },
    input:{
        width:'100%',
        borderWidth:1,
        borderColor: 'gray',
        borderRadius: 24,
        height:48,
        padding:8,
        paddingRight:16,
        backgroundColor: 'snow'
    },
    multiInput:{
        width:'100%',
        borderWidth:1,
        borderColor: 'gray',
        borderRadius: 24,
        height:256,
        padding:8,
        paddingRight:16,
        backgroundColor: 'snow'
    },
    empty:{
        height:100
    }
});
