import {StyleSheet, Dimensions} from 'react-native';

const {width,height} = Dimensions.get("window");

export default StyleSheet.create({
    screen:{
        width,
        height,
        backgroundColor: 'gray',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        padding:24
    },
    help:{
        fontSize:18,
        fontWeight: '100',
        textAlign: 'center',
        lineHeight:28
    },
    gestureView:{
        marginTop:90,
        marginBottom:90,
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%'
    },
    buttonsView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonDecline:{
        borderWidth:1,
        padding:8,
        borderRadius:32,
        backgroundColor: 'snow'
    },
    buttonAccept:{
        borderWidth:1,
        padding: 8,
        borderRadius:32,
        marginLeft:8
    },
    imgArrow:{
        width: (width/6)*3,
        height: 20,
        position: 'absolute',
        right: '10%'
    },
    round:{
        width:64,
        height:64,
        borderRadius: 32,
        borderWidth:3,
        backgroundColor: 'lightgray',
        borderColor: 'snow',
        position: 'absolute',
        zIndex:2
    }
});
