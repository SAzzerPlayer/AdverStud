import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    view:{
        padding:16,
        borderRadius: 32,
        backgroundColor: 'snow',
        marginBottom:24,
        flexDirection: 'column'
    },
    h1:{
        fontSize:18,
        fontWeight: 'bold',
        textAlign:'left',
        marginBottom:24
    },
    h2:{
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:'left',
        marginBottom:24
    },
    date:{
        fontSize:16,
        fontWeight: 'bold',
        color: 'red',
        marginBottom:12,
        textAlign: 'left'
    },
    p:{
        fontSize:14,
        fontWeight: '200',
        marginBottom:24,
        textAlign: 'left'
    },
    info:{
        marginLeft:'5%',
        marginRight:'5%'
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
