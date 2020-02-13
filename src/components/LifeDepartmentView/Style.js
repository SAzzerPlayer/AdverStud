import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    view:{
        backgroundColor: 'snow',
        width:'100%',
        marginBottom:24,
        borderRadius:32,
        padding:12,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems:"center"
    },
    description:{
        width:'60%'
    },
    image:{
        marginTop:24,
        marginBottom:24,
        marginRight:12,
        width:128,
        height:128,
        borderRadius:32
    },
    h1:{
        fontSize:16,
        fontWeight: 'bold',
        maxWidth:"100%",
        marginBottom:16
    },
    h2:{
        fontSize:14,
        fontWeight: '200',
        marginBottom: 8
    },
    read:{
        fontSize:16,
        fontWeight:'200',
        marginBottom:8,
        borderRadius:16,
        height:32,
        borderWidth:1,
        width:'50%',
        textAlign:'center'
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
