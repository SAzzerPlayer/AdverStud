import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    view:{
        flexDirection: 'column',
        marginBottom:24,
        padding:16,
        borderRadius:32,
        backgroundColor: 'snow',
    },
    h1:{
        fontSize:18,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom:24
    },
    h2:{
        fontSize:16,
        fontWeight: 'bold',
        marginBottom:24,
    },
    p:{
        fontSize:14,
        fontWeight: 'bold',
        marginBottom:24
    },
    date:{
        fontSize:16,
        color: 'red',
        fontWeight: 'bold',
        marginBottom: 8
    },
    info:{
        marginLeft: '10%',
        marginRight: '10%'
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
})
