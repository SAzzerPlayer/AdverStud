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
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom:24,
        marginTop:90
    },
    image: {
        width: '100%',
        height: 256,
        borderRadius: 32,
        backgroundColor: 'gray',
        marginBottom: 24
    },
    h2:{
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 24
    },
    p:{
        fontSize:14,
        fontWeight:'200',
        marginBottom:24
    },
    date:{
        fontSize:16,
        fontWeight: 'bold',
        color:'red',
        marginBottom:24
    },
    email:{
        fontSize:14,
        fontWeight: 'bold'
    }
})
