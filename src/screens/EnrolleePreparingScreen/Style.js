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
    empty:{
        marginTop:90
    }
});
