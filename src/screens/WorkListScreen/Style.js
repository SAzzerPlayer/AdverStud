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
        marginTop:90,
        textAlign:'center',
        marginBottom:12
    }
});
