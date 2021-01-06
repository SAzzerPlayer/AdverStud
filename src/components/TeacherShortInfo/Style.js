import {StyleSheet} from 'react-native';

export default StyleSheet.create({
   row:{
       flexDirection: 'row',
       justifyContent: 'space-between',
       marginBottom:24,
       width:'100%'
   },
    photo:{
        width:128,
        height:128,
        borderRadius:30
    },
    info:{
       flexDirection:'column',
        justifyContent:'space-between',
        flex:1,
        paddingLeft:8
    },
    h1:{
        fontSize: 16,
        fontWeight: 'bold',
        maxWidth:'50%'
    },
    h2:{
        fontSize: 14,
        maxWidth:'50%'
    },
    buttons:{
       flexDirection:"row",
        justifyContent:"flex-end",
        width:'60%',
        alignItems:"center",
        marginBottom:8,
    },
    button:{
        width:32,
        height:32
    }
});
