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

    },
    h2:{
        fontSize:16,
        fontWeight:"bold",
        textAlign: 'center'
    },
    empty:{
        marginTop:90
    },
    add:{
        padding:16,
        borderWidth:1,
        borderColor:"green",
        borderRadius:16,
        height:32,
        justifyContent: 'center',
        marginBottom:24
    },
    addText:{
        color: 'green',
        fontWeight: '100',
        textAlign:'center'
    },
});
