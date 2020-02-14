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
        textAlign:"center",
        marginBottom:24
    },
    h2:{
        fontSize:16,
        fontWeight:'bold',
        textAlign:"center",
        marginBottom:24
    },
    p:{
        fontSize: 14,
        fontWeight: 'bold',
        textAlign:'left',
        padding:8,
        marginBottom:24
    },
    active:{
        padding:8,
        borderWidth:2,
        borderColor:'#FCD404',
        borderRadius:32
    },
    picker:{
        width:36,
        alignSelf:'center',
        fontWeight:'bold',
        marginLeft:8
    },
    empty:{
        width:36
    },
    pickerItem:{
        fontSize:20,
        fontWeight:'bold'
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
        textAlign:"center"
    },
    groupView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:36,
        paddingLeft:36,
        height:60,
        marginBottom:24
    },
    edit:{
        width:32,
        height:32
    }
})
