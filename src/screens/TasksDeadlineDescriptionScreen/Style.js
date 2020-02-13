import {StyleSheet, Dimensions} from 'react-native';

const {width,height} = Dimensions.get("window");

export default StyleSheet.create({
    screen:{
        width,
        height,
        padding:24,
        paddingTop:0
    },
    image:{
        width:128,
        height:128,
        backgroundColor: 'gray',
        borderRadius: 32
    },
    teacherInfo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:"center",
        marginBottom: 24
    },
    h1:{
        fontSize:18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom:24
    },
    h2:{
        fontSize: 16,
        fontWeight: 'bold',
        maxWidth:'80%'
    },
    p:{
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 24
    },
    info:{
        marginLeft:16
    },
    date:{
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center',
        marginBottom: 24
    }
})