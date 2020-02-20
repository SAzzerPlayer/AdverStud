import {StyleSheet, Dimensions} from 'react-native';

const {width,height} = Dimensions.get("window");

export default StyleSheet.create({
    screen:{
        width,
        height,
        padding:24,
        paddingTop:90,
        alignItems:'center'
    },
    h1:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:24,
        textAlign:'center'
    },
    h2:{
        fontSize:14,
        fontWeight:'bold',
        marginBottom:24,
        textAlign: 'center'
    },
    p:{
        fontSize:14,
        fontWeight:"bold",
        textAlign:"center",
        marginBottom:24
    },
    input:{
        fontSize:14,
        height:64,
        borderRadius:32,
        borderWidth:1,
        width:'100%',
        borderColor:'gray',
        marginBottom:24,
        paddingRight:24,
        paddingLeft:24
    },
    empty:{
        height:200
    }
})
