import {StyleSheet, Dimensions} from 'react-native';

const {height,width} = Dimensions.get("window");

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
        textAlign:'center'
    },
    h2:{
        fontSize:16,
        fontWeight:'bold',
        textAlign:"center"
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:24,
        marginTop:90
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
    }
});
