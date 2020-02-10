import {StyleSheet,Dimensions} from 'react-native';

const {height,width} = Dimensions.get("window");

export default StyleSheet.create({
    screen:{
        width,
        height,
        padding:24,
        justifyContent: 'space-evenly',
        alignItems:"center"
    },
    h1:{
        fontSize:18,
        maxWidth:'90%',
        textAlign:'center'
    },
    image:{

    }
})
