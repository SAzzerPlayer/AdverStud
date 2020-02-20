import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    view:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    description:{
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24
    },
    p:{
        fontSize: 14,
        fontWeight: 'bold',
        width:"60%"
    },
    date:{
        color: 'red',
        fontWeight: 'bold'
    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom:8,
    },
    delete:{
        padding:16,
        justifyContent: 'center',
        borderRadius:16,
        height:32,
        borderWidth:1,
        borderColor:'red'
    },
    deleteText:{
        color:'red'
    },
    edit:{
        width:32,
        height:32
    }
})
