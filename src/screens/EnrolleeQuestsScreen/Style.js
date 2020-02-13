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
        marginBottom: 24,
        marginTop:90
    }
});