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
        marginTop:90,
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center",
        marginBottom:24
    },
    h2:{
        fontSize:16,
        fontWeight:"bold",
        textAlign:'center',
        marginBottom:48
    },
    listItem:{
        flexDirection: 'row',
        justifyContent:"space-between",
        marginBottom:24,
        alignItems:'center'
    },
    listTitle: {
        fontSize:14,
        maxWidth:'45%',
    }
});
