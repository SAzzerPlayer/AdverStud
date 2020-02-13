import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    view:{
        width:"100%",
        padding:12,
        borderRadius: 32,
        marginBottom:24,
        backgroundColor: 'snow'
    },
    h1:{
        fontSize:18,
        marginBottom:8,
        textAlign:'center'
    },
    h2:{
        fontSize:14,
        fontWeight:'bold',
        marginBottom:8,
        textAlign:'center'
    },
    p:{
        fontSize:14,
        fontWeight:'bold',
        marginBottom:8
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
