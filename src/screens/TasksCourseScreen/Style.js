import {StyleSheet,Dimensions} from 'react-native';

const {width,height} = Dimensions.get("window");

export default StyleSheet.create({
    screen:{
        width,
        height,
        padding:24,
        paddingTop:90
    },
    h1:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:"center",
        marginBottom:24
    },
    h2:{
        fontSize:16,
        fontWeight: 'bold',
        textAlign:'center',
        marginBottom:24
    },
    groups:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:24
    },
    input:{
        padding:16,
        height:64,
        borderRadius:32,
        borderWidth:1,
        marginBottom:24
    },
    empty:{
        height:196
    },
    picker:{
        width:'50%',
    },
});
