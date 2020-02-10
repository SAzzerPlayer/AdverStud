import {StyleSheet, Dimensions} from 'react-native';

const {height,width} = Dimensions.get("window");

export default StyleSheet.create({
    screen:{
        height,
        width,
        padding:24,
        paddingTop:0,
        alignItems:'center'
    },
    h1:{
        marginTop: 90,
        fontSize:18,
        fontWeight: 'bold',
        textAlign:"center",
        marginBottom:24
    },
    scroll:{
        //marginTop:24
    }
})
