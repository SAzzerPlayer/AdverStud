import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get("window");

export default StyleSheet.create({
    screen:{
        width,
        height,
        padding:24,
        paddingTop:0
    },
    scroll:{
        paddingTop:90
    },
    date:{
        fontSize:16,
        fontWeight: 'bold',
        color: 'red',
        marginBottom: 24
    },
    h1:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center'
    },
    h2:{
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center'
    },
    p:{
        fontSize:14,
        fontWeight: 'bold',
        marginBottom:24,
        textAlign: 'left'
    },
    image:{
        width:'100%',
        height:256,
        backgroundColor: 'gray',
        borderRadius: 32,
        marginBottom:24
    }
});
