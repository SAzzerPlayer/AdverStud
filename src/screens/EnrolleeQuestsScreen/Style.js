import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get("window");

export default StyleSheet.create({
    screen:{
        width,
        height,
        padding:24,
        paddingTop:0,
    },
    scroll:{
    },
    h1:{
        fontSize:18,
        fontWeight: 'bold',
        textAlign:"center",
    },
    h2:{
        fontSize:16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    header:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop:90,
        marginBottom:24
    },
    empty:{

    },
    add:{
        padding:16,
        borderWidth:1,
        borderColor:"green",
        borderRadius:16,
        height:32,
        justifyContent: 'center'
    },
    addText:{
        color: 'green',
        fontWeight: '100'
    },
});
