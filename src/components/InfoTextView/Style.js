import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    view:{
        flexDirection: 'column',
        alignItems: 'center',
        padding:8,
        marginBottom: 32
    },
    h1:{
        fontSize:18,
        fontWeight: 'bold',
        marginBottom:24
    },
    p:{
        fontSize:14,
        fontWeight: 'bold'
    },
    buttons:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginBottom:8
    },
    delete:{
        padding:8,
        borderRadius:16,
        borderWidth:1,
        borderColor:'red',
        height:32,
        justifyContent:'center'
    },
    deleteText:{
        color:'red'
    },
    edit:{
        height:32,
        width:32
    }
})
