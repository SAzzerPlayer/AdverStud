import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    p:{
        fontSize:14,
        fontWeight:'bold',
        padding:12
    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom:8
    },
    delete:{
        height:32,
        padding:16,
        borderWidth:1,
        borderRadius:16,
        borderColor:'red',
        justifyContent: 'center'
    },
    deleteText:{
        color:'red'
    },
    edit:{
        width:32,
        height:32
    }
});
